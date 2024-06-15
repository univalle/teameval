import { GroupCard } from '@/components/items/group-card'
import { ItemCard } from '@/components/items/item-card'
import { getStudentEvaluations, getStudentGroups } from '@/lib/services'

export async function Evaluations () {
  const evaluationList = await getStudentEvaluations()

  console.log(evaluationList[0])

  return (
    <div
      className='grid grid-cols-1 gap-10 px-2 pt-2 mt-6 overflow-auto rounded sm:grid-cols-2 md:grid-cols-3 w-full'
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      {evaluationList.map((program, index) => (
        <ItemCard
          key={index} // Utilizamos el índice como clave (key) única
          programTitle={program.evaluationInfo[0].evaluationName}
          semester={program.academicPeriod}
          subjectName={program.courseName}
          membersCount={program.courseCode}
          professor={program.professorNames[0]}
          group={program.groupCode}
          description={program.groupName}
        />
      ))}
    </div>
  )
}
