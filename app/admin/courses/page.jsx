import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import CoursesTable from './courses-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Courses () {
  return (
    <Card className='border-0 shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Cursos</CardTitle>
        <CardDescription className='text-lg'>Lista de cursos</CardDescription>
        <div className='flex justify-end'>
          <Link href='/admin/courses/new'>
            <Button className='mt-4 min-w-40' color='primary' variant='outline'>
              Crear nuevo curso
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <CoursesTable />
      </CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </Card>
  )
}
