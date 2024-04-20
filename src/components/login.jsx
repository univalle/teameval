import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Login () {
  return (
    <Card className='w-[450px]'>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid items-center w-full gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='user'>Usuario</Label>
              <Input id='user' placeholder='ejemplo@gmail.com' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input id='password' placeholder='••••••••' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex flex-col space-y-1.5'>
        <Button className='w-full'>Inciar sesión</Button>
        <a href='#' className='text-sm font-semibold'>
          Recuperar contraseña
        </a>
      </CardFooter>
    </Card>
  )
}
