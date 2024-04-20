import { Sidebar } from '@/components/sidebar'
import { Filters } from '@/components/filters'
import { ProgramsList } from '@/components/programs-list'

export default function Home () {
  return (
    <div className='mt-10 space-y-2'>
      <Sidebar />
      <h1 className='text-3xl font-semibold tracking-tight scroll-m-20'>
        Grupos activos
      </h1>
      <p className='text-lg text-muted-foreground text-slate-500'>
        <span>Nombre/número de grupo:</span>
      </p>
      <Filters />
      <ProgramsList />
    </div>
  )
}
