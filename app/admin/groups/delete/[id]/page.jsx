import { Button } from '@/components/ui/button'

export default function Page () {
  return (
    <div>
      <h1>Eliminando curso</h1>
      <p>¿Estás seguro?</p>
      <Button variant='destructive'>Delete</Button>
      <Button>Cancel</Button>
    </div>
  )
}

export const runtime = 'edge'
