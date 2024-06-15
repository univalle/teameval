import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function Results ({ student }) {
  return (
    <RadioGroup defaultValue='comfortable'>
      <span className='font-bold'>{student}</span>
      <p className='text-sm '>Promedio: 3</p>
      <p className='text-sm text-gray-500'>Calificación por criterio</p>
      <div className='flex items-center space-x-2'>
        <Button variant='outline' className='hover:bg-white'>
          1
        </Button>
        <Label htmlFor='r1'>Primer criterio</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant='outline' className='hover:bg-white'>
          3
        </Button>
        <Label htmlFor='r2'>Segundo criterio</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant='outline' className='hover:bg-white'>
          3
        </Button>
        <Label htmlFor='r3'>Tercer criterio</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant='outline' className='hover:bg-white'>
          4
        </Button>
        <Label htmlFor='r3'>Cuarto criterio</Label>
      </div>
    </RadioGroup>
  )
}
