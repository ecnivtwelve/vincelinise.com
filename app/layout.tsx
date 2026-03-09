import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

import { IBM_Plex_Sans } from 'next/font/google'
import Navigation from "./components/Navigation/Navigation";

const font = IBM_Plex_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vince Linise - Portfolio",
  description: "Portfolio de Vince Linise, fondateur de Papillon, étudiant en MMI à l'IUT de Lannion et développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={font.className + ' antialiased text-foreground bg-background overflow-x-hidden'}>
        <div className="gradient-bg"></div>

        <Navigation />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
