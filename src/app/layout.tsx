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

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://grupo-logos.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Grupo LOGOS | Palestras Corporativas Premium por Deryk",
  description: "Te mostro uma nova forma de enxergar o mundo. Palestras corporativas de alto impacto para líderes, empresários e equipes que buscam resultados através da razão.",
  keywords: "palestras corporativas, liderança estratégica, alta performance, deryk, grupo logos, cultura de crescimento, inteligência racional",
  openGraph: {
    title: "Grupo LOGOS | Te mostro uma nova forma de enxergar o mundo",
    description: "Palestras corporativas de alto impacto para líderes, empresários e equipes que buscam resultados através da razão.",
    url: baseUrl,
    siteName: "Grupo LOGOS",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Grupo LOGOS - Te mostro uma nova forma de enxergar o mundo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo LOGOS | Te mostro uma nova forma de enxergar o mundo",
    description: "Palestras corporativas de alto impacto para líderes, empresários e equipes que buscam resultados através da razão.",
    images: ["/images/og-image.png"],
  },
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
