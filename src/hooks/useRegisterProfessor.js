import { useToast } from "@/components/ui/use-toast";
import { getAuthToken } from "@/util/auth";
import { useState } from "react";

const useRegisterProfessor = () => {
    const { toast } = useToast();
  
    const [loading, setLoading] = useState(false);
  
    const registerProfessor = async (formData, resetForm) => {

        if (formData.password !== formData.password2) {
            toast({
                title: 'Error al registrar',
                description: 'Las contraseñas no coinciden.',
                status: 'error',
                });

                return;
        }

        formData.role = 'PROFESSOR';
        formData.name = `${formData.name} ${formData.lastname}`;
        formData.code = formData.document;

        console.log(formData);
      try {
        setLoading(true);
  
        const token = getAuthToken(); // Obtener el token de autenticación
        const response = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          toast({
            title: 'Registro exitoso',
            description: 'El profesor ha sido registrado correctamente.',
          });
          resetForm();
        } else {
          const errorData = await response.json();
          toast({
            title: 'Error al registrar',
            description: errorData.message.join(', ') || 'Hubo un error al procesar la solicitud.',
            status: 'error',
          });
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: 'Error de red',
          description: 'Ha ocurrido un error al intentar registrar al profesor. Por favor, inténtalo de nuevo más tarde.',
          status: 'error',
        });
      } finally {
        setLoading(false);
      }
    };
  
    return { registerProfessor, loading };
  };


  export default useRegisterProfessor;