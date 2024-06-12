// /@util/useAuthRedirect.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/util/auth';

const useAuthRedirect = () => {
  const router = useRouter();

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
    }
  }, [router]);

  return null; // Este hook no devuelve ningún componente, solo maneja la redirección
};

export const getUserTypeFromToken = (token) => {
  const decodedToken = decodeToken(token);
  return decodedToken ? decodedToken.role : null;
};

export const decodeToken = (token) => {
  // Aquí debes decodificar el token JWT, dependiendo de cómo lo hayas codificado en tu aplicación
  // Este es solo un ejemplo simplificado, debes usar la librería adecuada para decodificar el token
  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export default useAuthRedirect;