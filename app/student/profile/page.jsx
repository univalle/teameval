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
import { getStudentProfile } from '@/lib/services'

export default async function Users () {
  const studentData = await getStudentProfile()

  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Estudiante</CardTitle>
        <CardDescription className='text-lg'>Perfil estudiante</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col h-full justify-center'>
          <div>
            <span className='font-semibold'>Nombre:</span> {studentData.name}
          </div>
          <div>
            <span className='font-semibold'>Email:</span> {studentData.email}
          </div>
          <div>
            <span className='font-semibold'>Código:</span> {studentData.code}
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between' />
    </Card>
  )
}
