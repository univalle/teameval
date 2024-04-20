import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Teameval',
  description: 'Evaluation of individual performance'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es' className='font-sans'>
      <head>
        <link
          rel='shortcut icon'
          href='/images/favicon.ico'
          type='image/x-icon'
        />
      </head>
      <body>
        <div className='container px-0 border-x '>
          <div className='grid'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
