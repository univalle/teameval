import Link from 'next/link'
import { Login } from '@/components/login'
// TODO COLORES PERSONALIZADOS DE LA APLICACION SEGUN EL MOCKUP
// customRed
// customBlack
// customGrey
// activeCustomRed

function login () {
  return (
    <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
      <img
        src='/images/loginestudiantes.jpg'
        alt='estudiantes'
        className='hidden w-full h-auto md:max-h-full xl:block'
      />
      <div className='flex flex-col items-center justify-center p-8 bg-white'>
        <img
          src='/images/logoteameval.png'
          alt='logo team eval'
          className='w-24 h-24 mb-8'
        />
        <div className='flex flex-col items-center'>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default login
