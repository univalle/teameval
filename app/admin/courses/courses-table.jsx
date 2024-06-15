import TableList from '@/components/items/table-list'
import { getAllCoursesAdmin } from '@/lib/services'

export default async function CoursesTable () {
  const data = await getAllCoursesAdmin()

  return <TableList data={data} title='Lista de cursos' />
}
