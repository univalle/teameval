import './globals.css'

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
      <body>
        <div className='container px-0 border-x '>{children}</div>
      </body>
    </html>
  )
}
