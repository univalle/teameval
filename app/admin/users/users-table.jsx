import TableList from '@/components/items/table-list'
import { getAllUsersAdmin } from '@/lib/services'

export default async function UsersTable () {
  const data = await getAllUsersAdmin()

  return <TableList data={data} title='Lista de usuarios' />
}
