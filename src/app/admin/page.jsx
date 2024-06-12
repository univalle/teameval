'use client'

import { useEffect } from 'react';
import { Sidebar } from '@/components/sidebar';
import { ActiveGroups } from '@/components/admin/active-groups';
import { RegisterProfessor } from '@/components/admin/register-professor';
import { RegisterStudent } from '@/components/admin/register-student';
import { RegisterCourse } from '@/components/admin/register-course';
import { ImportStudents } from '@/components/admin/import-students';
import { getAuthToken } from '@/util/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserTypeFromToken } from '@/hooks/useAuthRedirect';
import { RegisterAdmin } from '@/components/admin/register-admin';
import RegisterUser from '@/components/admin/register-user';

export default function Home({ searchParams }) {
  const router = useRouter();
  const { active } = searchParams;
  const [tokenChecked, setTokenChecked] = useState(false); // Estado para verificar si se ha comprobado el token

  useEffect(() => {
    const token = getAuthToken();

    if (token) {
      // Si existe un token, determinar el tipo de usuario y redirigir
      const userType = getUserTypeFromToken(token);
      switch (userType) {
        case 'ADMIN':
          router.push('/admin');
          break;
        case 'PROFESSOR':
          router.push('/professor');
          break;
        case 'STUDENT':
          router.push('/student');
          break;
        default:
          console.log('no token');
          break;
      }
    } else {
      router.push('/login');
    }

    // Marcar que se ha verificado el token
    setTokenChecked(true);
  }, []);

  // Si el token aún no ha sido verificado, no renderizar nada
  if (!tokenChecked) {
    return null;
  }

  // Una vez que se ha verificado el token, renderizar el contenido del componente
  let activeComponent;

  if (active === 'item1') {
    activeComponent = <ActiveGroups />;
  } else if (active === 'item2') {
    activeComponent = <RegisterUser />;
  } else if (active === 'item3') {
    activeComponent = <RegisterStudent />;
  } else if (active === 'item4') {
    activeComponent = <RegisterAdmin />;
  } else if (active === 'item5') {
    activeComponent = <RegisterCourse />;
  } else if (active === 'item6') {
    activeComponent = <ImportStudents />;
  } else {
    activeComponent = <ActiveGroups />;
  }

  return (
    <div className='grid grid-cols-5 min-h-[85vh]'>
      <Sidebar activeItem={active ?? 'item1'} />
      {activeComponent}
    </div>
  );
}

export const runtime = 'edge';
