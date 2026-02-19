import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'TuttoCorpo | Studio Premium de Pilates en la Ciudad',
  description: 'Descubre el poder del movimiento consciente en TuttoCorpo. Clases premium de Pilates con equipos de última generación y atención personalizada para transformar tu cuerpo y mente.',
  keywords: ['Pilates', 'Reformer', 'Bienestar', 'Fitness Premium', 'Salud Integral', 'TuttoCorpo'],
  authors: [{ name: 'TuttoCorpo Studio' }],
  metadataBase: new URL('https://tutto-corpo.vercel.app'),
  openGraph: {
    title: 'TuttoCorpo | Pilates Profesional y Movimiento',
    description: 'Transforma tu vida a través del control y la precisión. Únete a nuestro estudio exclusivo.',
    url: 'https://tutto-corpo.vercel.app',
    siteName: 'TuttoCorpo Pilates',
    images: [
      {
        url: '/imagen-metadata.png',
        width: 1200,
        height: 630,
        alt: 'TuttoCorpo Studio Premium Pilates',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TuttoCorpo | Pilates Profesional y Movimiento',
    description: 'Clases premium de Pilates con atención personalizada.',
    images: ['/imagen-metadata.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.variable} ${plusJakarta.variable} ${playfair.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-background`}>
        <div className="noise" />
        {children}
      </body>
    </html>

  )
}
