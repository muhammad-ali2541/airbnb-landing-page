import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Hilltop Wellness Retreat | Sauna + Hot Tub',
  description:
    'Escape to a peaceful Forestville retreat with mountain views, private hot tub, outdoor infrared sauna, fast WiFi, and a relaxing Sonoma County getaway experience.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-sand-50 text-charcoal-900 antialiased">
        {children}
      </body>
    </html>
  )
}