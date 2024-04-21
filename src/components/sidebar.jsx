import { GroupIcon, HomeIcon, SettingsIcon } from './icons'

export function Sidebar () {
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
          <li>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 bg-[#fadede] dark:text-white dark:hover:bg-slate-700'
            >
              <HomeIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Grupos activos
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-[#fadede] dark:text-white dark:hover:bg-slate-700'
            >
              <GroupIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Registar profesores
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-[#fadede] dark:text-white dark:hover:bg-slate-700'
            >
              <GroupIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Registrar estudiantes
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-[#fadede] dark:text-white dark:hover:bg-slate-700'
            >
              <SettingsIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Registrar cursos
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-[#fadede] dark:text-white dark:hover:bg-slate-700'
            >
              <SettingsIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Importar estudiantes
              </span>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-[#fadede] dark:text-white dark:hover:bg-slate-700'
            >
              <SettingsIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Cerrar sesión
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
