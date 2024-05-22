import Link from 'next/link'

export function MenuItem ({ label, link, activeItem, icon, number }) {
  return (
    <li>
      <Link
        href={link}
        className={`flex items-center px-3 py-2 rounded-lg text-slate-900 ${
        activeItem === number ? 'bg-[#fadede]' : ''
      }  dark:text-white hover:bg-[#fadede]`}
      >
        {icon}
        <span className='flex-1 ml-3 whitespace-nowrap'>
          {label}
        </span>
      </Link>
    </li>
  )
}
