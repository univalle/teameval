import CourseCard from '@/components/items/course-card'
import { getStudentCourses } from '@/lib/services'

export default async function Courses () {
  const coursesList = await getStudentCourses()

  console.log(coursesList)

  return (
    <div
      className='grid grid-cols-1 gap-10 px-2 pt-2 mt-6 overflow-auto rounded sm:grid-cols-2 md:grid-cols-3 w-full'
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      {coursesList.map((course, index) => (
        <CourseCard
          key={index}
          courseName={course.courseName}
          courseCode={course.courseCode}
          professorNames={course.academicPeriod}
          groupName={course.groupName}
          groupCode={course.groupCode}
          academicPeriod={course.academicPeriod}
          numEvaluations={course.numEvaluations}
        />
      ))}
    </div>
  )
}
