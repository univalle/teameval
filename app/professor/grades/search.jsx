import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function Search () {
  const courses = [
    { id: 1, name: 'Curso 1' },
    { id: 2, name: 'Curso 2' },
    { id: 3, name: 'Curso 3' }
  ]

  return (
    <div className='flex gap-3'>
      <div className='w-full'>
        <Label htmlFor='course'>Seleccionar grupo</Label>
        <Select id='course' name='course' required>
          <SelectTrigger>
            <SelectValue placeholder='Seleccionar' />
          </SelectTrigger>
          <SelectContent>
            {courses.map(course => (
              <SelectItem key={course.id} value={course.id}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='w-full'>
        <Label htmlFor='course'>Seleccionar estudiante</Label>
        <Select id='course' name='course' required>
          <SelectTrigger>
            <SelectValue placeholder='Seleccionar' />
          </SelectTrigger>
          <SelectContent>
            {courses.map(course => (
              <SelectItem key={course.id} value={course.id}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='w-full'>
        <Label htmlFor='course'>Seleccionar curso</Label>
        <Select id='course' name='course' required>
          <SelectTrigger>
            <SelectValue placeholder='Seleccionar' />
          </SelectTrigger>
          <SelectContent>
            {courses.map(course => (
              <SelectItem key={course.id} value={course.id}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
