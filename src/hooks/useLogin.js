import { useState } from 'react';
import useClient from './useClient';
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
        router.push('/admin'); // Change '/admin' to appropriate route based on user type
      } else {
        setError('Invalid token');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in');
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;