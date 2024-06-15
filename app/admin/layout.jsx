import Sidebar from '@/components/layout/sidebar/sidebar'

export default function Layout ({ children }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 min-h-[85vh]'>
      <div className='md:col-span-1  xl:block hidden'>
        <Sidebar />
      </div>

      <div className='col-span-5 md:col-span-4 bg-white p-4'>{children}</div>
    </div>
  )
}
