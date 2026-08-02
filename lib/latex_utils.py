"""
Utilità condivise per la correzione degli escape LaTeX.

I parser JSON/YAML possono distruggere le sequenze di escape LaTeX,
trasformando ad esempio \\alpha in \\x07lpha (\\a = BEL = 0x07).
Queste funzioni ripristinano i comandi LaTeX corretti.

Inoltre normalizzano i delimitatori matematici al formato atteso dal
frontend SenzaTesto (remark-math + KaTeX): solo `$...$` e `$$...$$`.
"""

from __future__ import annotations

import re


def fix_latex_escapes(text: str) -> str:
    """
    Ripristina i caratteri di escape LaTeX distrutti da parser poco attenti.

    Le sequenze corrotte tipiche sono:
        \\x07lpha  → \\alpha   (\\a = BEL)
        \\x08eta   → \\beta    (\\b = BS)
        \\x0crac   → \\frac    (\\f = FF)
        \\theta    → \\theta   (\\t = TAB, ma solo nel contesto LaTeX)

    Args:
        text: Il testo contenente potenziali escape corrotti.

    Returns:
        Il testo con gli escape LaTeX ripristinati.
    """
    if not text:
        return text

    # Escape distrutti da conversione a caratteri di controllo ASCII
    text = text.replace('\x07lpha', '\\alpha')
    text = text.replace('\x08eta', '\\beta')
    text = text.replace('\x0crac', '\\frac')

    # Escape distrutti da interpretazione Python delle sequenze \\
    text = text.replace('\theta', '\\theta')
    text = text.replace('\tan', '\\tan')
    text = text.replace('\to ', '\\to ')
    text = text.replace('\to\n', '\\to\n')
    text = text.replace('\times', '\\times')
    text = text.replace('\text', '\\text')
    text = text.replace('\right', '\\right')
    text = text.replace('\rho', '\\rho')
    text = text.replace('\nabla', '\\nabla')
    text = text.replace('\nu ', '\\nu ')
    text = text.replace('\nu\n', '\\nu\n')
    text = text.replace('\notin', '\\notin')

    return text


def fix_math_blocks(text: str) -> str:
    """Assicura che i blocchi ``$$`` multi-riga o con ambienti LaTeX stiano su righe proprie."""
    if not text:
        return text

    def replacer(match: re.Match[str]) -> str:
        content = match.group(1)
        if "\n" in content or r"\begin{" in content:
            return f"\n$$\n{content.strip()}\n$$\n"
        return match.group(0)

    fixed = re.sub(r"(?<!\$)\$\$(.*?)\$\$(?!\$)", replacer, text, flags=re.DOTALL)
    fixed = re.sub(r"\n{3,}", "\n\n", fixed)
    return fixed.strip()


def normalize_latex_for_site(text: str) -> str:
    """Converte i delimitatori TeX non supportati nel formato KaTeX del sito.

    Il frontend (remark-math + rehype-katex) supporta solo:
      - inline: ``$...$``
      - blocco: ``$$`` su righe proprie

    I modelli LLM spesso emettono invece ``\\(...\\)`` e ``\\[...\\]``,
    che in Markdown diventano parentesi letterali e lasciare i comandi
    (``\\in``, ``\\ge``, …) come testo grezzo.
    """
    if not text:
        return text

    text = fix_latex_escapes(text)

    # Display math: \[ ... \]  →  $$\n...\n$$
    # Supporta sia form multi-riga che inline sulla stessa riga.
    text = re.sub(
        r"\\\[(.*?)\\\]",
        lambda m: f"\n$$\n{m.group(1).strip()}\n$$\n",
        text,
        flags=re.DOTALL,
    )

    # Inline math: \( ... \)  →  $...$
    text = re.sub(
        r"\\\((.*?)\\\)",
        lambda m: f"${m.group(1).strip()}$",
        text,
        flags=re.DOTALL,
    )

    # Blocchi $$ già presenti: garantisci layout a righe proprie se multi-line.
    text = fix_math_blocks(text)

    # Normalizza spazi multipli accidentali introdotti dalla conversione.
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()
