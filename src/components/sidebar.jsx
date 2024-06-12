'use client'

import Link from 'next/link'
import { GroupIcon, HomeIcon, SettingsIcon } from './icons'
import useLogout from '@/hooks/useLogout';

export function Sidebar ({ activeItem }) {
  const logout = useLogout();
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
            <Link
              href='?active=item1'
              className={`flex items-center px-3 py-2 rounded-lg text-slate-900 ${
                activeItem === 'item1' ? 'bg-[#fadede]' : ''
              }  dark:text-white hover:bg-[#fadede]`}
            >
              <HomeIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Grupos activos
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='?active=item2'
              className={`flex items-center px-3 py-2 rounded-lg text-slate-900 ${
                activeItem === 'item2' ? 'bg-[#fadede]' : ''
              }  dark:text-white hover:bg-[#fadede]`}
            >
              <GroupIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Registar profesores
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='?active=item3'
              className={`flex items-center px-3 py-2 rounded-lg text-slate-900 ${
                activeItem === 'item3' ? 'bg-[#fadede]' : ''
              }  dark:text-white hover:bg-[#fadede]`}
            >
              <GroupIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Registrar estudiantes
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='?active=item4'
              className={`flex items-center px-3 py-2 rounded-lg text-slate-900 ${
                activeItem === 'item4' ? 'bg-[#fadede]' : ''
              }  dark:text-white hover:bg-[#fadede]`}
            >
              <SettingsIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Registrar cursos
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='?active=item5'
              className={`flex items-center px-3 py-2 rounded-lg text-slate-900 ${
                activeItem === 'item5' ? 'bg-[#fadede]' : ''
              }  dark:text-white hover:bg-[#fadede]`}
            >
              <SettingsIcon />
              <span className='flex-1 ml-3 whitespace-nowrap'>
                Importar estudiantes
              </span>
            </Link>
          </li>
          <li>
      <button
        onClick={logout}
        className="flex items-center px-3 py-2 rounded-lg text-slate-900 dark:text-white hover:bg-[#fadede]"
      >
        <SettingsIcon className="h-5 w-5" />
        <span className="flex-1 ml-3 whitespace-nowrap">Cerrar sesión</span>
      </button>
    </li>
        </ul>
      </div>
    </aside>
  )
}
