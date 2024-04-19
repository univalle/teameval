import Image from 'next/image'
import React from 'react'
import '/styles/styles.css'
import Link from 'next/link'

function login () {
  return (
    <html>
      <head>
        <title>Login</title>
      </head>

      <body style={{ margin: '0', padding: '0' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            margin: '0',
            padding: '0'
          }}
        >
          <img
            src='/images/loginestudiantes.png'
            alt='estudiantes'
            style={{ width: '580px', height: '641px' }}
          />

          <div
            style={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '600px',
              flex: '1',
              marginLeft: '150px'
            }}
          >
            <img
              src='/images/logoteameval.png'
              alt='logo team eval'
              style={{ width: '107px', height: '107px' }}
            />

            <div
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                marginTop: '30px',
                border: '2px solid gray',
                width: '500px',
                borderRadius: '10px'
              }}
            >
              <label
                htmlFor='email'
                className='text-sm font-bold'
                style={{ marginTop: '25px' }}
              >
                Usuario
              </label>
              <input
                className='w-full p-2 mb-4 text-black border-gray-400'
                type='email'
                placeholder='ejemplo@gmail.com'
                id='email'
                style={{
                  width: '450px',
                  border: '2px solid black',
                  borderRadius: '10px'
                }}
              />

              <label htmlFor='password' className='text-sm font-bold'>
                Contraseña
              </label>
              <input
                className='w-full p-2 mb-4 text-black border-gray-400'
                type='password'
                placeholder='.........'
                id='password'
                style={{
                  marginBottom: '30px',
                  width: '450px',
                  border: '2px solid black',
                  borderRadius: '10px'
                }}
              />

              <button
                className='px-4 py-2 font-bold bg-red-500 hover:bg-red-700 textwhite'
                style={{
                  marginBottom: '18px',
                  borderRadius: '8px',
                  width: '450px'
                }}
              >
                Inicio de sesion
              </button>

              <Link href={'/recuperarclave'} style={{ marginBottom: '32px' }}>
                Recuperar contraseña
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

export default login
