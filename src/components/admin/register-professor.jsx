import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import useRegisterProfessor from '@/hooks/useRegisterProfessor'

export function RegisterProfessor () {
  const { registerProfessor, loading } = useRegisterProfessor()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    const resetForm = () => {
      e.target.reset()
    }

    await registerProfessor(data, resetForm)
  }

  return (
    <div className='col-span-5 pl-4 pr-8 mt-10 xl:col-span-4'>
      <h1 className='mb-4 text-3xl font-semibold tracking-tight scroll-m-20'>
        Registrar profesor
      </h1>
      <div className='flex justify-center pb-4'>
        <Card className='w-[600px] border-0'>
          <CardContent className='pt-4'>
            <form onSubmit={handleSubmit}>
              <div className='grid items-center w-full gap-4 mb-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Nombres</Label>
                  <Input id='name' name='name' placeholder='José' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='lastname'>Apellidos</Label>
                  <Input id='lastname' name='lastname' placeholder='Pérez' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='email'>Correo electrónico</Label>
                  <Input id='email' name='email' placeholder='ejemplo@gmail.com' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password'>Contraseña</Label>
                  <Input id='password' name='password' type='password' placeholder='••••••••' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='password2'>Confirmar contraseña</Label>
                  <Input id='password2' name='password2' type='password' placeholder='••••••••' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='type'>Tipo de documento</Label>
                  <Select id='type' name='type' required>
                    <SelectTrigger>
                      <SelectValue placeholder='Seleccionar' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='cedula'>Cédula</SelectItem>
                      <SelectItem value='tarjeta identidad'>Tarjeta de identidad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='document'>Documento</Label>
                  <Input id='document' name='document' placeholder='1234567' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='phone'>Teléfono</Label>
                  <Input id='phone' name='phone' placeholder='230 123 45 67' required />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='gender'>Género</Label>
                  <Select id='gender' name='gender' required>
                    <SelectTrigger>
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
              <CardFooter>
                <Button type='submit' className='w-full' disabled={loading}>
                  {loading ? 'Creando...' : 'Crear'}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
