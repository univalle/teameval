import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { createGroup } from '@/lib/actions'
import { getAllCoursesAdmin } from '@/lib/services'

export default async function Page () {
  const courses = await getAllCoursesAdmin()

  return (
    <div className='col-span-5 pl-4 pr-8 mt-10 xl:col-span-4'>
      <CardTitle className='text-xl'>Grupo</CardTitle>
      <CardDescription className='text-lg'>
        Crear un nuevo grupo
      </CardDescription>
      <div className='flex pb-4'>
        <Card className='w-[600px] border-0 shadow-none'>
          <CardContent className='pt-4'>
            <form action={createGroup} method='post'>
              <div className='grid items-center w-full gap-4 mb-4 mt-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Nombre</Label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Primer Grupo'
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='code'>Código</Label>
                  <Input id='code' name='code' placeholder='1234567' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='course'>Curso</Label>
                  <Select id='course' name='course' required>
                    <SelectTrigger>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map(course => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardFooter>
                <Button type='submit' className='w-full'>
                  Crear
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const runtime = 'edge'
