import { Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

import StructuredData from "./components/StructuredData";

export const metadata = {
  metadataBase: new URL('https://piscinascr.com'),
  title: {
    default: `${SITE_NAME} | Construcción de Piscinas de Lujo en Costa Rica`,
    template: `%s | ${SITE_NAME}`
  },
  description: "Líderes en construcción, mantenimiento y remodelación de piscinas en Costa Rica. Especialistas en concreto y fibra de vidrio con acabados premium y garantía total.",
  keywords: ["piscinas costa rica", "construcción de piscinas", "mantenimiento de piscinas", "piscinas de concreto", "piscinas de fibra de vidrio", "remodelación de piscinas", "jacuzzis costa rica", "piscinas san carlos", "piscinas alajuela"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: `${SITE_NAME} | Construcción de Piscinas`,
    description: "Transforma tu espacio exterior en un paraíso personal con los expertos en piscinas de Costa Rica. Más de 600 proyectos entregados.",
    url: 'https://piscinascr.com',
    siteName: SITE_NAME,
    images: [
      {
        url: '/piscina1.jpeg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Piscinas de Lujo`,
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Piscinas en Costa Rica`,
    description: 'Expertos en diseño y construcción de piscinas de lujo. ¡Cotiza tu proyecto hoy!',
    images: ['/piscina1.jpeg'],
  },
  verification: {
    google: 'google-site-verification-placeholder',
    // yandex: 'yandex-verification-placeholder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${montserrat.className} ${montserrat.variable} antialiased selection:bg-brand-cyan selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-blue focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-2xl outline-none"
        >
          Saltar al contenido principal
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
