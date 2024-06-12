import { useRouter } from 'next/navigation'

const useLogout = () => {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return logout
}

export default useLogout
