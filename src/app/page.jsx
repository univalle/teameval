import { Sidebar } from '@/components/sidebar'

export default function Home () {
  return (
    <div className='space-y-2 mt-20 container'>
      <Sidebar />
      <h1 className='text-4xl font-bold tracking-tight scroll-m-20'>Grupos activos</h1>
      <p className='text-lg text-muted-foreground text-slate-500'>
        <span>Nombre/número de grupo:</span>
      </p>
    </div>
  )
}
