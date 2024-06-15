import TableList from '@/components/items/table-list'
import { getProfessorGroups } from '@/lib/services'

export default async function GroupsTable () {
  const data = await getProfessorGroups()

  return <TableList data={data} title='Lista de evaluaciones' />
}
