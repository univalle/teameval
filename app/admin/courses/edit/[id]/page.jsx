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
import { createUser } from '@/lib/actions'

export default function Page () {
  return (
    <div className='col-span-5 pl-4 pr-8 mt-10 xl:col-span-4'>
      <CardTitle className='text-xl'>Cursos</CardTitle>
      <CardDescription className='text-lg'>
        Crear un nuevo curso
      </CardDescription>
      <div className='flex pb-4'>
        <Card className='w-[600px] border-0 shadow-none'>
          <CardContent className='pt-4'>
            <form action={createUser}>
              <div className='grid items-center w-full gap-4 mb-4 mt-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Nombre</Label>
                  <Input
                    id='name'
                    name='name'
                    placeholder='Desarrollo de Software'
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='code'>Código</Label>
                  <Input id='code' name='code' placeholder='1234567' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='description'>Descripción</Label>
                  <Input
                    id='description'
                    name='description'
                    placeholder='Tecnología en Desarrollo de Software'
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='academicPeriod'>Periodo académico</Label>
                  <Input
                    id='academicPeriod'
                    name='academicPeriod'
                    placeholder='2024-1'
                    required
                  />
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
