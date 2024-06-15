import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import EvaluationsTable from './evaluations-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Evaluations () {
  return (
    <Card className='border-0 shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Evaluaciones</CardTitle>
        <CardDescription className='text-lg'>
          Lista de evaluaciones
        </CardDescription>
        <div className='flex justify-end'>
          <Link href='/admin/evaluations/new'>
            <Button className='mt-4 min-w-40' color='primary' variant='outline'>
              Crear nueva evaluación
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <EvaluationsTable />
      </CardContent>
      <CardFooter className='flex justify-between' />
    </Card>
  )
}
