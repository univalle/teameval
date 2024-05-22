import { GroupIcon, HomeIcon, SettingsIcon } from './icons'
import { MenuItem } from './menu-item'

export function Sidebar ({ activeItem }) {
  return (
    <aside
      id='sidebar'
      className='hidden w-64 transition-transform xl:block'
      aria-label='Sidebar'
    >
      <div className='flex flex-col h-full px-3 py-4 overflow-y-auto bg-white border-r border-slate-200 dark:border-slate-700 dark:bg-slate-900'>
        <div className='flex flex-col items-center justify-center mt-8'>
          <img
            src='/images/avatar.jpg'
            alt='Avatar'
            className='w-20 h-20 mb-3 rounded-full'
          />
          <h3 className='flex flex-col items-center px-3 py-2 mb-4 rounded-lg text-slate-900 dark:text-white'>
            <span className='ml-3 text-2xl font-semibold'>Bienvenido</span>
            <span className='text-2xl font-semibold text-primary'>Admin</span>
          </h3>

        </div>
        <ul className='space-y-2 text-sm font-medium'>

          <MenuItem activeItem={activeItem} label='Grupos activos' link='?active=item1' icon={<HomeIcon />} number='item1' />
          <MenuItem activeItem={activeItem} label='Registrar profesores' link='?active=item2' icon={<HomeIcon />} number='item2' />
          <MenuItem activeItem={activeItem} label='Registrar estudiantes' link='?active=item3' icon={<GroupIcon />} number='item3' />
          <MenuItem activeItem={activeItem} label='Registrar cursos' link='?active=item4' icon={<SettingsIcon />} number='item4' />
          <MenuItem activeItem={activeItem} label='Cerrar sesión' link='/login' icon={<HomeIcon />} number='item5' />

        </ul>
      </div>
    </aside>
  )
}
