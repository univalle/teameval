import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import GroupsTable from './groups-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Groups () {
  return (
    <Card className='border-0 shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Grupos</CardTitle>
        <CardDescription className='text-lg'>Lista de grupos</CardDescription>
        <div className='flex justify-end'>
          <Link href='/admin/groups/new'>
            <Button className='mt-4 min-w-40' color='primary' variant='outline'>
              Crear nuevo grupo
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <GroupsTable />
      </CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </Card>
  )
}
