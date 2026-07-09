---
type: Concept
title: Frontend Performance & Mobile UX
description: Tecniche avanzate di ottimizzazione per React, GPU rendering e UI lag su dispositivi mobili.
tags: [frontend, react, performance, mobile, framer-motion, ux]
timestamp: 2026-07-08T10:00:00Z
---

# Frontend Performance & Mobile UX

Questa guida documenta le scelte architetturali implementate in **SenzaTesto** per massimizzare la fluidità della UI (Specialmente su dispositivi mobili), eliminando i famigerati ritardi e "jank" dovuti al motore di rendering del browser o alla *reconciliation* di React.

## 1. Aggressive Memoization (React Rendering)

Nelle applicazioni single-page moderne (SPA), i cambiamenti di stato nei nodi padre causano un "re-render" a cascata di tutti i componenti figli. Quando si maneggiano DOM molto grandi o complessi (ad esempio griglie con centinaia di formule LaTeX e componenti interattivi), il processo di *diffing* dell'albero virtuale di React può bloccare il thread principale (Main Thread) per 100-300ms.

### La Soluzione
SenzaTesto utilizza `useMemo` e `useCallback` in maniera *aggressiva* per i blocchi principali (`<ExercisesGrid />`, `<CollectionsGrid />`). 
In `page.tsx`, l'intero contenuto centrale della pagina viene congelato in un `useMemo` che ha come dipendenze unicamente gli stati di ricerca/filtro.
Quando l'utente clicca su un bottone della NavBar per aprire un Modal (modificando `isContributeModalOpen` per esempio), la pagina **non** ricalcola il DOM, scendendo il costo computazionale a ~0.5ms.

## 2. GPU Caching per i Modal (CSS & Framer Motion)

Uno dei problemi più persistenti nello sviluppo web mobile è il ritardo in apertura di grossi elementi a comparsa (Modals).
Spesso, per nascondere i modal, si usa `AnimatePresence` (che smonta il nodo dal DOM) oppure la direttiva CSS `display: none`.
Tuttavia, passare da `display: none` a `display: flex` su un dispositivo mobile innesca un massiccio *Layout Reflow*: il browser deve calcolare la geometria di centinaia di nodi sincronicamente, congelando l'animazione di entrata.

Anche la direttiva `visibility: hidden` può creare lievi colli di bottiglia, in quanto i browser "dimenticano" il painting dell'elemento per risparmiare memoria video, forzando un ritardo di painting nel primo frame di animazione.

### La Soluzione Definitiva (Modal "Always-on")
In `Modal.tsx`, non usiamo né `AnimatePresence`, né `display: none`, né `visibility: hidden`. 
Il modal è **sempre renderizzato** nell'albero DOM e nella GPU, ma viene reso invisibile e non interagibile tramite:
- `opacity: 0`
- `pointer-events: none`
- `aria-hidden="true"` (per l'accessibilità)

Inoltre, il Modal utilizza `createPortal` per iniettare l'overlay alla radice del body (evitando conflitti di z-index causati da contesti di stacking annidati) ed è dotato di un "focus trap" per impedire che l'utente navighi col tasto `Tab` gli elementi sottostanti, migliorando radicalmente l'accessibilità da tastiera.

In questo modo l'elemento viene rasterizzato e caricato in memoria grafica al momento del caricamento della pagina (o durante il tempo di *idle*). Quando l'utente lo apre, il telefono non fa altro che cambiare istantaneamente la trasparenza di una texture già pronta in memoria, a 0 costo di CPU.

## 2.5 Resilienza del Rendering Matematico (ErrorBoundary)
Renderizzare stringhe LaTeX arbitrarie provenienti da un LLM è un'operazione rischiosa. Invece di far crollare l'intera pagina React quando un carattere di escape fallisce, i blocchi matematici sono wrappati in un `<MathRenderer />` customizzato che usa opzioni restrittive (`throwOnError: false`) e gestisce le eccezioni del parser, degradando fluidamente a mostrare un fallback piuttosto che invalidare il DOM.

## 2.6 Rendering Grafico (TikzJax e WebAssembly 100% Client-Side)
Il curriculum di matematica e geometria analitica prevede l'uso estensivo di grafici. KaTeX e MathJax non supportano le direttive grafiche `PGF/TikZ`.
Invece di affidare al backend la generazione costosa di immagini, il frontend adotta `@rod2ik/tikzjax`. 
Quando il parser Markdown intercetta un blocco di codice contrassegnato come `tikz` (o un blocco `latex` contenente `\begin{tikzpicture}`), il componente `TikzRenderer` inietta uno `<script type="text/tikz">`.
Il motore **TikzJax** (agganciato in ascolto tramite un `MutationObserver`) carica una versione precompilata in WebAssembly di TeX (`core.dump.gz`) direttamente dagli asset statici del browser (`/public/tikzjax/`), renderizzando vettorialmente il codice in formato SVG in maniera asincrona.
Questo approccio 100% client-side svincola completamente il sito dalle limitazioni stringenti di Serverless Functions (come la memoria massima di 50MB o problemi col parsing di binari WASM di grosse dimensioni), consentendo perfino l'hosting statico su GitHub Pages senza l'ausilio di API routes.

## 2.8 Infinite Scroll vs Paginazione
Invece di scaricare l'intero database in memoria al boot, l'applicazione usa chiamate API paginate (tramite RPC Supabase sicure). È stato adottato un approccio "Load More" manuale con pulsante invece di uno *scroll* infinito automatico: questo fornisce agli studenti un senso del progresso migliore ed evita carichi di lettura costosi in DB (che supererebbero il livello Free del backend serverless) nel caso in cui un bot provasse a scraparlo facendo scrolling automatico.

## 3. Disabilitazione del Tap-Highlight Delay

Sui browser mobile webkit (Safari iOS, Chrome Mobile), toccare elementi cliccabili può causare un "flash" grigio o bluastro per 300ms. Oltre ad essere poco estetico, fornisce una percezione tattile di *ritardo* prima che il codice Javascript venga realmente eseguito.

### Soluzione
Il file globale `globals.css` implementa:
```css
* {
  -webkit-tap-highlight-color: transparent;
}
```
Questo, abbinato al `touch-action: manipulation` implicito, permette click istantanei e fluidi come nelle applicazioni native.

## 4. Backdrop Blur e Ombre su Mobile

Il filtro CSS `backdrop-filter: blur(px)` è incredibilmente oneroso su schede grafiche mobile a basso consumo, portando spesso le animazioni a 10-15 FPS. Lo stesso vale per le ombre diffuse (`box-shadow` multiple e grandi) su container con bordi arrotondati e `overflow: hidden`.

### Soluzione
Tramite le utility classes di Tailwind (`sm:backdrop-blur-md`, `sm:shadow-xl`), questi pesanti effetti grafici di glassmorfismo sono stati limitati **esclusivamente** ai dispositivi con schermi `sm` o superiori (Tablet, Desktop). Sugli smartphone, il sistema degrada elegantemente a un background scuro semitrasparente (`bg-slate-900/40`), mantenendo però costanti i 60 FPS senza surriscaldare il dispositivo.
