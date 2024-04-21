import { ProgramCard } from '@/components/program-card'

export function ProgramsList () {
  // Objeto con 5 ejemplos de programas
  const programs = [
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    },
    {
      programTitle: 'Matemáticas Avanzadas',
      semester: '2022 - 1',
      subjectName: 'Matemáticas Avanzadas',
      membersCount: '4/4',
      professor: 'Dr. Juan Pérez',
      group: 'Grupo A',
      description:
        'Este programa cubrirá temas avanzados en cálculo y álgebra lineal.'
    }
  ]

  return (
    <div
      className='grid grid-cols-1 gap-10 px-2 pt-2 mt-6 overflow-auto rounded sm:grid-cols-2 md:grid-cols-3 bg-slate-100'
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      {/* Utilizamos map para recorrer el array de programas */}
      {programs.map((program, index) => (
        <ProgramCard
          key={index} // Utilizamos el índice como clave (key) única
          programTitle={program.programTitle}
          semester={program.semester}
          subjectName={program.subjectName}
          membersCount={program.membersCount}
          professor={program.professor}
          group={program.group}
          description={program.description}
        />
      ))}
    </div>
  )
}
