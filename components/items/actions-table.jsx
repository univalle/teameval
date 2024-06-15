'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

export default function ActionsTable ({ id }) {
  const pathname = usePathname()

  return (
    <>
      <Link href={`${pathname}/delete/${id}`}>
        <Button variant='destructive' className='min-w-20'>
          Eliminar
        </Button>
      </Link>
      <Link href={`${pathname}/edit/${id}`}>
        <Button className='min-w-20'>Editar</Button>
      </Link>
    </>
  )
}
