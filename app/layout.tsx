import type { Metadata } from "next";
import "./globals.css";

import { Geist } from 'next/font/google'

const geist = Geist({
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
      <body className={geist.className + ' antialiased text-foreground bg-background overflow-x-hidden'}>
        <div className="gradient-bg"></div>

        {children}
      </body>
    </html>
  );
}
