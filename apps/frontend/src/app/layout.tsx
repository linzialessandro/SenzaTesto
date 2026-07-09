import type { Metadata, Viewport } from "next";
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

import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css" />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient Glows - Subtle Italian Flag homage */}
          <div className="ambient-glow glow-green w-[40rem] h-[40rem] top-[-10%] left-[-15%]"></div>
          <div className="ambient-glow glow-white w-[50rem] h-[50rem] top-[20%] left-[25%] opacity-10"></div>
          <div className="ambient-glow glow-red w-[35rem] h-[35rem] bottom-[-10%] right-[-10%]"></div>
          
          {/* Main Content */}
          <div className="z-10 flex-1 flex flex-col relative">
            {children}
          </div>
          
          {/* Portal root for Modals */}
          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
