import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { getProfessorProfile } from '@/lib/services'
import Search from './search'
import { Results } from './results'

export default async function Users () {
  const professorData = await getProfessorProfile()

  return (
    <Card className='shadow-none border-0'>
      <CardHeader>
        <CardTitle className='text-xl'>Calificaciones</CardTitle>
        <CardDescription className='text-lg'>
          Consultar calificaciones de estudiante
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Search />
        <Card className='mt-6 h-[400px] flex justify-center items-center'>
          <CardContent>
            <div className='flex h-[200px] justify-center p-6 gap-40 mb-16'>
              <Results student='Estudiante 1' />
              <Results student='Estudiante 2' />
              <Results student='Estudiante 3' />
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className='flex justify-between' />
    </Card>
  )
}
