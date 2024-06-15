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
import { Evaluations } from './evaluations'
import { SearchBar } from '@/components/layout/search-bar'
import { Separator } from '@/components/ui/separator'

export default function Page () {
  return (
    <Card className='border-0 shadow-none'>
      <CardHeader>
        <CardTitle className='text-xl'>Evaluaciones</CardTitle>
        <CardDescription className='text-lg'>
          Lista de evaluaciones del estudiante
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SearchBar />
        <Separator className='my-6' />
        <Evaluations />
      </CardContent>
      <CardFooter className='flex justify-between' />
    </Card>
  )
}
