import { NextRequest, NextResponse } from 'next/server';
import tex2svg from 'isomorphic-tikzjax';

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();
    
    if (!content) {
      return NextResponse.json({ error: 'Manca il contenuto TikZ' }, { status: 400 });
    }

    const latexCode = `\\begin{document}
${content}
\\end{document}`;

    const svg = await tex2svg(latexCode, {
      embedFontCss: true,
      disableOptimize: false
    });

    return NextResponse.json({ svg });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('Errore durante la compilazione TikZ:', err);
    return NextResponse.json({ error: err.message || 'Errore di compilazione' }, { status: 500 });
  }
}
