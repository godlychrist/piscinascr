import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://piscinascr.com'),
  title: {
    default: `${SITE_NAME} | Construcción de Piscinas de Lujo`,
    template: `%s | ${SITE_NAME}`
  },
  description: "Líderes en construcción, mantenimiento y remodelación de piscinas en Costa Rica. Especialistas en concreto y fibra de vidrio con acabados premium.",
  keywords: ["piscinas costa rica", "construcción de piscinas", "mantenimiento de piscinas", "piscinas de concreto", "piscinas de fibra de vidrio", "remodelación de piscinas", "jacuzzis costa rica"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_NAME,
    description: "Transforma tu espacio exterior en un paraíso personal con los expertos en piscinas de Costa Rica.",
    url: 'https://piscinascr.com',
    siteName: SITE_NAME,
    locale: 'es_CR',
    type: 'website',
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
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500 selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-indigo-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-2xl outline-none"
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
