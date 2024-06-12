// /@util/api

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost/3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Función para establecer el token JWT en el encabezado de la solicitud
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common.Authorization
  }
}

export default api
