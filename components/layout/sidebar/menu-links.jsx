'use client'

import { GroupIcon, HomeIcon, SettingsIcon } from '@/components/icons/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuLinksStudent = [
  {
    icon: HomeIcon,
    text: 'Perfil',
    href: '/student/profile'
  },
  {
    icon: GroupIcon,
    text: 'Evaluaciones',
    href: '/student/evaluations'
  },
  {
    icon: GroupIcon,
    text: 'Grupos',
    href: '/student/groups'
  },
  {
    icon: GroupIcon,
    text: 'Cursos',
    href: '/student/courses'
  }
]

const menuLinksAdmin = [
  {
    icon: SettingsIcon,
    text: 'Usuarios',
    href: '/admin/users'
  },
  {
    icon: SettingsIcon,
    text: 'Cursos',
    href: '/admin/courses'
  },
  {
    icon: SettingsIcon,
    text: 'Evaluaciones',
    href: '/admin/evaluations'
  },
  {
    icon: SettingsIcon,
    text: 'Grupos',
    href: '/admin/groups'
  }
]

const menuLinksProfessor = [
  {
    icon: HomeIcon,
    text: 'Mi perfil',
    href: '/professor/profile'
  },
  {
    icon: GroupIcon,
    text: 'Grupos',
    href: '/professor/groups'
  },
  {
    icon: GroupIcon,
    text: 'Evaluaciones',
    href: '/professor/evaluations'
  },
  {
    icon: GroupIcon,
    text: 'Calificaciones',
    href: '/professor/grades'
  }
]

export default function MenuLinks () {
  const pathname = usePathname()
  const firstPart = pathname.split('/')[1]
  let menuLinks = []
  if (firstPart === 'student') {
    menuLinks = menuLinksStudent
  }

  if (firstPart === 'admin') {
    menuLinks = menuLinksAdmin
  }

  if (firstPart === 'professor') {
    menuLinks = menuLinksProfessor
  }

  return menuLinks.map(item => {
    const LinkIcon = item.icon
    return (
      <li key={item.text}>
        <Link
          href={item.href}
          className={`flex items-center px-3 py-2 rounded-lg text-slate-900 hover:bg-gray-200
          ${pathname === item.href ? 'bg-gray-200' : ''} w-full
            `}
        >
          <LinkIcon className='h-5 w-5' />
          <span className='flex-1 ml-3 whitespace-nowrap'>{item.text}</span>
        </Link>
      </li>
    )
  })
}
