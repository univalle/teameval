import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teameval',
  description: 'Evaluation of individual performance'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <link
          rel='shortcut icon'
          href='/images/favicon.ico'
          type='image/x-icon'
        />
      </head>
      <body className={`${inter.styles} w-full xl:w-[1000px] mx-auto mt-4`}>
        {children}
      </body>
    </html>
  )
}
