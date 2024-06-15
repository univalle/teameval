import TableList from '@/components/items/table-list'
import { getAllGroupsAdmin } from '@/lib/services'

export default async function GroupsTable () {
  const data = await getAllGroupsAdmin()

  return <TableList data={data} title='Lista de grupos' />
}
