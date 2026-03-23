import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Pioneer Sports Consultancy | From Indian Dreams to Global Arenas',
  description:
    'Pioneer Sports Consultancy connects Indian football talent with global opportunities. Elite training programs, international exposure, and career pathways led by Real Madrid Graduate School alumni Hardik Sheth.',
  keywords:
    'Indian football consultancy, football trials India, youth football development, international football programs, Pioneer Sports, Hardik Sheth, football scouting India',
  openGraph: {
    title: 'Pioneer Sports Consultancy | From Indian Dreams to Global Arenas',
    description:
      'Transforming Indian football talent into international opportunities.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pioneer Sports Consultancy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pioneer Sports Consultancy',
    description: 'Transforming Indian football talent into international opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="bg-dark-900 text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
