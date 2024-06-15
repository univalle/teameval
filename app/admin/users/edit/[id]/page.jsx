import { getOneUserAdmin } from '@/lib/services'
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
import { updateUser } from '@/lib/actions'
import Link from 'next/link'

export default async function Page ({ params }) {
  const { id } = params
  const data = await getOneUserAdmin(id)
  return (
    <div className='col-span-5 pl-4 pr-8 mt-10 xl:col-span-4'>
      <CardTitle className='text-xl'>Usuarios</CardTitle>
      <CardDescription className='text-lg'>
        Actualizar un usuario
      </CardDescription>
      <div className='flex pb-4'>
        <Card className='w-[600px] border-0 shadow-none'>
          <CardContent className='pt-4'>
            <form action={updateUser}>
              <input type='hidden' name='id' value={data?.id} />
              <div className='grid items-center w-full gap-4 mb-4 mt-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Nombres</Label>
                  <Input
                    id='name'
                    name='name'
                    defaultValue={data?.name}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='email'>Correo electrónico</Label>
                  <Input
                    id='email'
                    name='email'
                    defaultValue={data?.email}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='code'>Código</Label>
                  <Input
                    id='code'
                    name='code'
                    defaultValue={data?.code}
                    required
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='role'>Rol</Label>
                  <Select id='role' name='role'>
                    <SelectTrigger>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='student'>Estudiante</SelectItem>
                      <SelectItem value='professor'>Profesor</SelectItem>
                      <SelectItem value='admin'>Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardFooter class='flex gap-3'>
                <Button type='submit' className='min-w-40'>
                  Actualizar
                </Button>
                <Link href='/admin/users' className='min-w-40'>
                  <Button type='submit' className='w-full' variant='outline'>
                    Regresar
                  </Button>
                </Link>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
