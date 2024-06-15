import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { getProfessorProfile } from '@/lib/services'

export default async function Users () {
  const professorData = await getProfessorProfile()

  return (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Profeesor</CardTitle>
        <CardDescription className='text-lg'>Perfil profesor</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col h-full justify-center'>
          <div>
            <span className='font-semibold'>Nombre:</span> {professorData.name}
          </div>
          <div>
            <span className='font-semibold'>Email:</span> {professorData.email}
          </div>
          <div>
            <span className='font-semibold'>Código:</span> {professorData.code}
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </Card>
  )
}
