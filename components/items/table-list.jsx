import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '../ui/button'
import Link from 'next/link'
import ActionsTable from './actions-table'

export default function TableList ({ data, title }) {
  data.forEach((item, index) => {
    delete item.createdAt
    delete item.updatedAt
    delete item.password
  })

  const columns = Object.keys(data[0])
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map(column => (
            <TableHead key={column}>{column}</TableHead>
          ))}
          <TableHead className='text-right'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map(column => (
              <TableCell key={column}>{row[column]}</TableCell>
            ))}
            <TableCell className='flex flex-row-reverse gap-2'>
              <ActionsTable id={row.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
