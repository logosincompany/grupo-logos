import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Grupo LOGOS | Palestras Corporativas Premium por Deryk",
  description: "Descubra uma nova forma de enxergar o mundo. Palestras corporativas de alto impacto para líderes, empresários e equipes que buscam resultados através da razão, clareza e mudança de mentalidade.",
  keywords: "palestras corporativas, liderança estratégica, alta performance, deryk, grupo logos, cultura de crescimento, inteligência racional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-navy-900 text-slate-100 font-sans antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
