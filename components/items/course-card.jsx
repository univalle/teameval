import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function CourseCard ({
  courseName,
  courseCode,
  groupName,
  groupCode,
  evaluationName,
  academicPeriod,
  numEvaluations
}) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between py-3 text-center text-white rounded-t-lg bg-primary'>
        <CardTitle className='text-base'>{courseName}</CardTitle>
        <CardDescription className='ml-2 text-sm text-white'>
          {courseCode}
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-3'>
        <div className='flex items-center justify-between mt-4 mb-2 '>
          <h3 className='text-sm font-bold'>{groupName}</h3>
          <p className='text-sm'>{groupCode}</p>
        </div>
        <div className='flex items-center justify-between mb-2 text-sm text-slate-500'>
          <p>{academicPeriod}</p>
          <p>Total evaluaciones: {numEvaluations}</p>
        </div>
        <p className='text-sm'>{evaluationName}</p>
      </CardContent>
      <CardFooter className='flex  justify-center p-6 py-0 pb-4' />
    </Card>
  )
}
