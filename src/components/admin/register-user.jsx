'use client'

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RegisterStudent } from './register-student';
import { RegisterAdmin } from './register-admin';
import { RegisterProfessor } from './register-professor';

export default function RegisterUser() {
  const [selectedOption, setSelectedOption] = useState('1'); // Establecer el valor predeterminado en '1' (Estudiante)

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case '1':
        return <RegisterStudent />;
      case '2':
        return <RegisterProfessor />;
      case '3':
        return <RegisterAdmin />;
      default:
        return null;
    }
  };

  return (
    <div className='col-span-10 pl-4 pr-10 mt-10 xl:col-span-4'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
      <h3 className='mb-4 text-xl font-semibold tracking-tight scroll-m-20'>
        Tipo de usuario
      </h3>
        <Select onValueChange={(option) => setSelectedOption(option)} value={selectedOption}>
          <SelectTrigger>
            <SelectValue placeholder='Seleccionar opción' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Estudiante</SelectItem>
            <SelectItem value='2'>Profesor</SelectItem>
            <SelectItem value='3'>Adminstrador</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {renderSelectedComponent()}
    </div>
  );
}