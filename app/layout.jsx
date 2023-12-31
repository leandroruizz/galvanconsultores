import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Galvan Consultores',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
