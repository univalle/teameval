import { Login } from '@/components/login'

function login () {
  return (
    <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
      <img
        src='/images/loginestudiantes.jpg'
        alt='estudiantes'
        className='hidden w-full h-[85vh] md:max-h-full xl:block'
      />
      <div className='flex flex-col items-center justify-center p-8 bg-white object-cover'>
        <img
          src='/images/logoteameval.png'
          alt='logo team eval'
          className='object-cover w-24 h-24 mb-8'
        />
        <div className='flex flex-col items-center'>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default login
