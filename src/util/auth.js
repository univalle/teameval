// /@util/auth

// Función para guardar el token en el Local Storage
export const saveAuthToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Función para recuperar el token del Local Storage
  export const getAuthToken = () => {
    return localStorage.getItem('token');
  };