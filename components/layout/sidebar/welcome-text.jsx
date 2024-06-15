'use client'

import { usePathname } from 'next/navigation'

export default function WelcomeText () {
  const pathname = usePathname()
  const firstPart = pathname.split('/')[1]

  let name = ''

  if (firstPart === 'student') {
    name = 'Estudiante'
  } else if (firstPart === 'professor') {
    name = 'Profesor'
  } else if (firstPart === 'admin') {
    name = 'Administrador'
  } else {
    name = 'Usuario'
  }
  return (
    <h3 className='flex flex-col items-center px-3 py-2 mb-4 rounded-lg text-slate-900 dark:text-white'>
      <div className='text-xl font-semibold'>Bienvenido</div>
      <div className='text-xl font-semibold text-primary'>{name}</div>
    </h3>
  )
}
