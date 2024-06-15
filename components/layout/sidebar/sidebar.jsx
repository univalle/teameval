import { LogoutIcon } from '@/components/icons/icons'
import Avatar from './avatar'
import { Suspense } from 'react'
import MenuLinks from './menu-links'
import Link from 'next/link'
import WelcomeText from './welcome-text'

export default function Sidebar () {
  return (
    <aside
      id='sidebar'
      className='hidden transition-transform xl:block'
      aria-label='Sidebar'
    >
      <div className='flex flex-col h-full px-2 py-4 overflow-y-auto bg-white border-r border-slate-200'>
        <div className='flex flex-col items-center justify-center mt-8'>
          <Suspense fallback={<div>Loading...</div>}>
            <Avatar />
          </Suspense>
          <WelcomeText />
        </div>
        <ul className='space-y-2 text-sm font-medium'>
          <MenuLinks />
          <li>
            <Link
              href='/logout'
              className='flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-gray-200 w-full'
            >
              <LogoutIcon className='h-5 w-5' />
              <span className='ml-3 whitespace-nowrap'>Cerrar sesión</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
