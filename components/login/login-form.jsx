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
import AlertDialogExample from '../layout/alert-dialog'
export function LoginForm () {
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
              <Input id='user' placeholder='ejemplo@gmail.com' required />
            </div>
            <div className='flex flex-col space-y-1.5 mb-4'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                required
              />
            </div>
          </div>
          <Button type='submit' className='w-[400px]' size='lg'>
            Iniciar sesión
          </Button>
        </form>
      </CardContent>
      <CardFooter className='flex flex-col space-y-1.5' />
    </Card>
  )
}
