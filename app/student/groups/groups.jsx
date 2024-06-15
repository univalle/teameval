import { GroupCard } from '@/components/items/group-card'
import { getStudentGroups } from '@/lib/services'

export async function Groups () {
  const groupList = await getStudentGroups()

  console.log(groupList)

  return (
    <div
      className='grid grid-cols-1 gap-10 px-2 pt-2 mt-6 overflow-auto rounded sm:grid-cols-2 md:grid-cols-3 w-full'
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      {groupList.map(group => (
        <GroupCard key={group.id} {...group} />
      ))}
    </div>
  )
}
