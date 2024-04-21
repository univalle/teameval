import { Filters } from '@/components/filters'
import { ProgramsList } from '@/components/programs-list'

export function ActiveGroups () {
  return (
    <div className='col-span-5 pl-4 pr-10 mt-10 xl:col-span-4'>
      <h1 className='text-3xl font-semibold tracking-tight scroll-m-20'>
        Grupos activos
      </h1>
      <h3 className='mb-4 text-lg text-muted-foreground text-slate-500'>
        <span>Nombre/número de grupo:</span>
      </h3>
      <Filters />
      <ProgramsList />
    </div>
  )
}
