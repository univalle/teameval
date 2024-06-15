import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

export function GroupCard ({
  groupName,
  groupCode,
  courseName,
  courseCode,
  academicPeriod,
  numEvaluations
}) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between py-3 text-center text-white rounded-t-lg bg-primary'>
        <CardTitle className='text-base'>{groupName}</CardTitle>
      </CardHeader>
      <CardContent className='pb-0'>
        <div className='flex items-center justify-between mt-2 mb-2 p-0'>
          <p className='text-sm font-bold'>Código</p>
          <p className='text-sm'>{groupCode}</p>
        </div>
      </CardContent>
      <CardContent className='pb-2'>
        <div className='flex items-center justify-between mt-2 '>
          <p className='text-sm font-bold'>Curso</p>
          <p className='text-sm'>{courseName}</p>
        </div>
      </CardContent>
      <CardContent className='pb-2'>
        <div className='flex items-center justify-between mb-2 text-sm text-slate-500 '>
          <p className='text-sm'>{academicPeriod}</p>
          <p className='text-sm'>Total evaluaciones: {numEvaluations}</p>
        </div>
      </CardContent>
      {/* <CardFooter className='flex justify-between p-6 py-0 pb-4'>
        <Button variant='outline'>Eliminar</Button>
        <Button>Entrar</Button>
      </CardFooter> */}
    </Card>
  )
}
