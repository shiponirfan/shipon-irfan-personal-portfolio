import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Shipon Irfan',
  description: 'Shipon Irfan - Personal Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
