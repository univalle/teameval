import { Sidebar } from '@/components/sidebar'
import { ActiveGroups } from '@/components/admin/active-groups'
import { RegisterProfessor } from '@/components/admin/register-professor'
import { RegisterStudent } from '@/components/admin/register-student'
import { RegisterCourse } from '@/components/admin/register-course'
import { ImportStudents } from '@/components/admin/import-students'

export default function Home ({ searchParams }) {
  const { active } = searchParams
  let activeComponent

  if (active === 'item1') {
    activeComponent = <ActiveGroups />
  } else if (active === 'item2') {
    activeComponent = <RegisterProfessor />
  } else if (active === 'item3') {
    activeComponent = <RegisterStudent />
  } else if (active === 'item4') {
    activeComponent = <RegisterCourse />
  } else if (active === 'item5') {
    activeComponent = <ImportStudents />
  } else {
    activeComponent = <ActiveGroups />
  }

  return (
    <div className='grid grid-cols-5 min-h-[85vh]'>
      <Sidebar activeItem={active ?? 'item1'} />
      {activeComponent}
    </div>
  )
}

export const runtime = 'edge'
