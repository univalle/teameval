import { GroupCard } from './group-card'

export function GroupList (groupList) {
  const groups = [
    {
      name: 'Grupo A',
      code: '12345',
      members: 4
    },
    {
      name: 'Grupo B',
      code: '67890',
      members: 3
    },
    {
      name: 'Grupo C',
      code: '13579',
      members: 2
    },
    {
      name: 'Grupo D',
      code: '24680',
      members: 1
    }
  ]
  return (
    <div
      className='grid grid-cols-1 gap-10 px-2 pt-2 mt-6 overflow-auto rounded sm:grid-cols-2 md:grid-cols-3 bg-slate-100 w-full'
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      {/* Utilizamos map para recorrer el array de grupos */}
      {groups.map((group, index) => (
        <GroupCard
          key={index}
          groupName={group.name}
          groupCode={group.code}
          numberOfMembers={group.members}
        />
      ))}
    </div>
  )
}
