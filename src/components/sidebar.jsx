export function Sidebar () {
  return (
    <aside
      id='sidebar'
      className='w-64 h-screen transition-transform '
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 lucide lucide-home text-primary'
                width='24'
                height='24'
                aria-hidden='true'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                <polyline points='9 22 9 12 15 12 15 22' />
              </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 lucide lucide-users text-primary'
                width='24'
                height='24'
                aria-hidden='true'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx='9' cy='7' r='4' />
                <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-primary lucide lucide-package'
                width='24'
                height='24'
                aria-hidden='true'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16.5 9.4 7.55 4.24' />
                <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
                <polyline points='3.29 7 12 12 20.71 7' />
                <line x1='12' x2='12' y1='22' y2='12' />
              </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 lucide lucide-settings text-primary'
                width='24'
                height='24'
                aria-hidden='true'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 lucide lucide-settings text-primary'
                width='24'
                height='24'
                aria-hidden='true'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 lucide lucide-settings text-primary'
                width='24'
                height='24'
                aria-hidden='true'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
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
