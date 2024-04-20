import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { Button } from '@/components/ui/button'

export function Filters () {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Semestre' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Semestre 1</SelectItem>
          <SelectItem value='2'>Semestre 2</SelectItem>
          <SelectItem value='3'>Semestre 3</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Materia' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='math'>Matemáticas</SelectItem>
          <SelectItem value='physics'>Física</SelectItem>
          <SelectItem value='chemistry'>Química</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Profesor' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='john_doe'>John Doe</SelectItem>
          <SelectItem value='jane_doe'>Jane Doe</SelectItem>
          <SelectItem value='alex_smith'>Alex Smith</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Carrera' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='engineering'>Ingeniería</SelectItem>
          <SelectItem value='biology'>Biología</SelectItem>
          <SelectItem value='business'>Negocios</SelectItem>
        </SelectContent>
      </Select>

      <Button>Limpiar Filtros</Button>
    </div>
  )
}
