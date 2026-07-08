"""
Utilità condivise per la correzione degli escape LaTeX.

I parser JSON/YAML possono distruggere le sequenze di escape LaTeX,
trasformando ad esempio \\alpha in \\x07lpha (\\a = BEL = 0x07).
Queste funzioni ripristinano i comandi LaTeX corretti.
"""


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
