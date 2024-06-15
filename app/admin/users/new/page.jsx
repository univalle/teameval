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

export default function NewUser () {
  return (
    <div className='col-span-5 pl-4 pr-8 mt-10 xl:col-span-4'>
      <CardTitle className='text-xl'>Usuarios</CardTitle>
      <CardDescription className='text-lg'>
        Crear un nuevo usuario
      </CardDescription>
      <div className='flex pb-4'>
        <Card className='w-[600px] border-0 shadow-none'>
          <CardContent className='pt-4'>
            <form action={createUser}>
              <div className='grid items-center w-full gap-4 mb-4 mt-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Nombres</Label>
                  <Input id='name' name='name' placeholder='José' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='lastname'>Apellidos</Label>
                  <Input
                    id='lastname'
                    name='lastname'
                    placeholder='Pérez'
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='email'>Correo electrónico</Label>
                  <Input
                    id='email'
                    name='email'
                    placeholder='ejemplo@gmail.com'
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password'>Contraseña</Label>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='••••••••'
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='code'>Código</Label>
                  <Input id='code' name='code' placeholder='1234567' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='role'>Rol</Label>
                  <Select id='role' name='role' required>
                    <SelectTrigger>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                    <SelectContent position='student'>
                      <SelectItem value='student'>Estudiante</SelectItem>
                      <SelectItem value='professor'>Profesor</SelectItem>
                      <SelectItem value='admin'>Admin</SelectItem>
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
