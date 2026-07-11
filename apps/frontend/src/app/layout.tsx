import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfd" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "SenzaTesto | L'eccellenza matematica, accessibile a tutti",
  description: "SenzaTesto è il primo database open-source di esercizi di matematica generati dall'Intelligenza Artificiale, gratuito per tutti gli studenti e professori italiani.",
  openGraph: {
    title: "SenzaTesto",
    description: "Database di matematica procedurale generato da IA.",
    url: "https://senzatesto.it",
    siteName: "SenzaTesto",
    locale: "it_IT",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" type="text/css" href={process.env.NODE_ENV === 'production' ? '/SenzaTesto/tikzjax/fonts.css' : '/tikzjax/fonts.css'} />
        {process.env.NODE_ENV === 'production' && (
          <script defer data-domain="senzatesto.it" src="https://plausible.io/js/script.js"></script>
        )}
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background container to prevent scroll from glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Ambient Glows - Subtle Italian Flag homage */}
            <div className="ambient-glow glow-green w-[40rem] h-[40rem] top-[-10%] left-[-15%]"></div>
            <div className="ambient-glow glow-white w-[50rem] h-[50rem] top-[20%] left-[25%] opacity-10"></div>
            <div className="ambient-glow glow-red w-[35rem] h-[35rem] bottom-[-10%] right-[-10%]"></div>
          </div>
          
          {/* Main Content */}
          <div className="z-10 flex-1 flex flex-col relative">
            {children}
          </div>
          
          {/* Portal root for Modals */}
          <div id="modal-root"></div>
        </ThemeProvider>
        
        <Script 
          src={process.env.NODE_ENV === 'production' ? '/SenzaTesto/tikzjax/tikzjax.js' : '/tikzjax/tikzjax.js'} 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
