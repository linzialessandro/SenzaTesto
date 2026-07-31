# Frontend Context

## Ubiquitous Language

- **Exercise**: The core entity rendered in the UI, containing problem text, solution text, and metadata (difficulty, tags, topic, year, `ai_generated`).
- **MathRenderer**: A component responsible for rendering LaTeX math formulas securely using KaTeX / react-markdown.
- **Short Code**: A unique 5–6 character alphanumeric identifier used to reference and share an exercise (`?exercise=ABCDE`).
- **URL Filters**: Query-string state (`q`, `topic`, `year`, `difficulty`, `exercise`) that drives search and is shareable on reload.
- **Curriculum Map**: Hard-coded collection tiles plus year/difficulty selectors; not a full curriculum tree yet.

## Architecture

- **Framework**: Next.js (App Router) with `output: "export"` and `basePath: /SenzaTesto` (GitHub Pages).
- **Entry**: `app/page.tsx` is a thin `Suspense` shell around `components/home/HomeClient.tsx`.
- **Data Fetching**: Direct Supabase client (`@supabase/supabase-js`) calling PostgreSQL RPC `search_exercises` and `log_solution_view`.
- **State**: URL is the source of truth for filters; search input is debounced (500 ms) before fetch; year/topic/difficulty/exercise update the URL immediately via `router.replace`.
- **Sharing**: `ExerciseShareButton` (Web Share / WhatsApp / copy permalink); `ShareWidget` shares the full current URL.
- **Styling**: Tailwind CSS with custom `globals.css` utilities (e.g., `.glass-panel`).
- **Icons**: Lucide React.
- **Animations**: Framer Motion for list transitions, modals, and hover effects.
- **Type Safety**: Zod boundary validation (`ExerciseSchema`) and strict TypeScript settings; see knowledge concept `architecture/frontend_type_safety`.
- **Component Structure**: `layout` (NavBar), `home` (HeroSection, SearchSection, CollectionsGrid, ExercisesGrid, HomeClient), `modals`, share widgets.

## Related knowledge

- Discovery & permalinks: `docs/knowledge/architecture/exercise-discovery.md`
- Search RPC / FTS: `docs/knowledge/database/indexing.md`
