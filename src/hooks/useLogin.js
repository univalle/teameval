import { useState, useEffect } from 'react';
import useClient from './useClient';
import { getAuthToken } from '@/util/auth';
import { useRouter } from 'next/navigation';

const useLogin = () => {
  const router = useRouter();
  const { post } = useClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await post('http://localhost:3000/auth/login', { email, password });
      const { token } = response; // Assuming the response contains a token
      if (token) {
        localStorage.setItem('token', token);
        // Redirigir después de iniciar sesión
        switch (getUserTypeFromToken(token)) {
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
        setError('Correo o contraseña incorrectos');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in');
      setLoading(false);
    }
  };

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

  return { login, loading, error };
};

const getUserTypeFromToken = (token) => {
  const decodedToken = decodeToken(token);
  return decodedToken ? decodedToken.role : null;
};

const decodeToken = (token) => {
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

export default useLogin;
