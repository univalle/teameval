import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import UsersTable from './users-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Users () {
  return (
    <Card className='border-0 shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Usuarios</CardTitle>
        <CardDescription className='text-lg'>Lista de usuarios</CardDescription>
        <div className='flex justify-end'>
          <Link href='/admin/users/new'>
            <Button className='mt-4 min-w-40' color='primary' variant='outline'>
              Crear nuevo usuario
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <UsersTable />
      </CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </Card>
  )
}
