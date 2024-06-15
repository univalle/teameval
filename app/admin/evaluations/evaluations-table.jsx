import TableList from '@/components/items/table-list'
import { getAllEvaluationsAdmin } from '@/lib/services'

export default async function EvaluationsTable () {
  const data = await getAllEvaluationsAdmin()

  return <TableList data={data} title='Lista de evaluaciones' />
}
