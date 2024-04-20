import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

export function ProgramCard ({
  programTitle,
  date,
  subjectName,
  membersCount,
  professor,
  group,
  description
}) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between py-3 text-center text-white rounded-t-lg bg-primary'>
        <CardTitle className='text-base'>{programTitle}</CardTitle>
        <CardDescription className='text-sm text-white'>{date}</CardDescription>
      </CardHeader>
      <CardContent className='pb-3'>
        <div className='flex items-center justify-between mt-4 mb-2 '>
          <h3 className='text-sm font-bold'>{subjectName}</h3>
          <p className='text-sm'>{membersCount}</p>
        </div>
        <div className='flex items-center justify-between mb-2 text-sm text-slate-500'>
          <p>{professor}</p>
          <p>{group}</p>
        </div>
        <p className='text-sm'>{description}</p>
      </CardContent>
      <CardFooter className='flex justify-between p-6 py-0 pb-4'>
        <Button variant='outline'>Eliminar</Button>
        <Button variant='outline'>Entrar</Button>
      </CardFooter>
    </Card>
  )
}
