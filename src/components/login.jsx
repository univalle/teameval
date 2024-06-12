"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import useLogin from '@/hooks/useLogin';

export function Login() {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  useAuthRedirect();

  return (
    <Card className='w-[450px]'>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='grid items-center w-full gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='user'>Usuario</Label>
              <Input id='user' placeholder='ejemplo@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Contraseña</Label>
              <Input id='password' type='password' placeholder='••••••••' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <Button type='submit' className='w-[400px]' disabled={loading}>Iniciar sesión</Button>
          {error && <p className='text-red-500'>{error}</p>}
        </form>
      </CardContent>
      <CardFooter className='flex flex-col space-y-1.5'>
        <Link href='#' className='text-sm font-semibold'>Recuperar contraseña</Link>
      </CardFooter>
    </Card>
  );
}