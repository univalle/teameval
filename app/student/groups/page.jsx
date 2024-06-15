import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Groups } from './groups'

export default function Page () {
  return (
    <Card className='border-0 shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Grupos</CardTitle>
        <CardDescription className='text-lg'>Lista de grupos</CardDescription>
        <div className='flex justify-end'>
          <Link href='/admin/users/new'>
            <Button className='mt-4 min-w-40' color='primary' variant='outline'>
              Filtrar
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Groups />
      </CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </Card>
  )
}
