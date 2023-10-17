import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'
import './globals.css'
import { Prompt, Oxygen } from 'next/font/google'

const oxygen = Oxygen({ subsets: ['latin'], weight: ['300', '400', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icon: '/hidden-talent-icon-arrow.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oxygen.className}>
      <head>
        <link rel="icon" href="/hidden-talent-icon.svg" />
      </head>
      <body className='max-w-[100vw]'>
        <div className='grid grid-rows-[auto_1fr_auto] min-h-screen w-screen'>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
