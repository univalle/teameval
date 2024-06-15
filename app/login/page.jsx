import { LoginForm } from '@/components/login/login-form'
import { Button } from '@/components/ui/button'

export default function Login () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 min-h-[85vh]'>
      <img
        src='/images/loginphoto.webp'
        alt='estudiantes'
        className='hidden w-full h-[85vh] md:max-h-full xl:block object-cover col-span-3'
      />
      <div className='flex flex-col items-center justify-center p-8 bg-white col-span-5 xl:col-span-2'>
        <img
          src='/images/logoteameval.png'
          alt='logo team eval'
          className='object-cover w-20 h-20 mb-8'
        />
        <div className='flex flex-col items-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
