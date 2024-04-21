import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export function RegisterProfessor () {
  return (
    <div className='col-span-5 pl-4 pr-8 mt-10 xl:col-span-4'>
      <h1 className='mb-4 text-3xl font-semibold tracking-tight scroll-m-20'>
        Registrar profesor
      </h1>
      <div className='flex justify-center pb-4'>
        <Card className='w-[600px] border-0'>
          <CardContent className='pt-4'>
            <form>
              <div className='grid items-center w-full gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Nombres</Label>
                  <Input id='name' placeholder='José' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='lastname'>Apellidos</Label>
                  <Input id='lastname' placeholder='Pérez' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='email'>Correo electrónico</Label>
                  <Input id='email' placeholder='ejemplo@gmail.com' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password'>Contraseña</Label>
                  <Input id='password' placeholder='••••••••' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password2'>Confirmar constraseña</Label>
                  <Input id='password2' placeholder='••••••••' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='document'>Tipo de documento</Label>
                  <Select>
                    <SelectTrigger id='document'>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='cedula'>Cédula</SelectItem>
                      <SelectItem value='tarjeta identidad'>
                        Tarjeta de identidad
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='cod'>Código</Label>
                  <Input id='cod' placeholder='1234567' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='phone'>Teléfono</Label>
                  <Input id='phone' placeholder='230 123 45 67' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='gender'>Género</Label>
                  <Select>
                    <SelectTrigger id='gender'>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='masculino'>Masculino</SelectItem>
                      <SelectItem value='femenino'>Femenino</SelectItem>
                      <SelectItem value='otro'>Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className='w-full'>Crear</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
