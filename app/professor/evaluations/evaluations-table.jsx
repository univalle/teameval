import TableList from '@/components/items/table-list'
import { getProfessorEvaluations } from '@/lib/services'

export default async function EvaluationsTable () {
  const data = await getProfessorEvaluations()

  return <TableList data={data.proffesorEvaluations} title='Lista de grupos' />
}
