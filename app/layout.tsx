import type { Metadata } from 'next'
import {
  Sora,
  Instrument_Serif,
  Manrope,
  JetBrains_Mono,
} from 'next/font/google'
import './globals.css'
import FloatingActions from '@/components/FloatingActions'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SKIOLO — Set the System.',
  description:
    'Business systems advisory for founders. We help you set the system — so the system can set the business.',
  keywords: ['business systems', 'SOPs', 'org design', 'consulting', 'Kerala', 'India', 'GCC'],
  openGraph: {
    title: 'SKIOLO — Set the System.',
    description: 'Business systems advisory for founders. We help you set the system — so the system can set the business.',
    siteName: 'SKIOLO',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sora.variable} ${instrumentSerif.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Blocking inline script — runs before first paint to read localStorage
          and apply data-theme, preventing a flash of the wrong theme (FOUC).
          suppressHydrationWarning on <html> prevents React from complaining
          about the attribute mismatch on hydration.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('skiolo-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}
