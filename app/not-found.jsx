import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound () {
  return (
    <div className='flex items-center justify-center h-[85vh]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold text-red-500'>404</h1>
        <p className='text-xl font-semibold mb-4'>Página no encontrada</p>
        <Link href='/login'>
          <Button size='lg'>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  )
}
