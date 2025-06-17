import { Navigate, Outlet } from 'react-router-dom'
import  useAuth  from '../../hooks/useAuth'
import LoadingSpinner from '../Common/LoadingSpinner'

export default function ProtectedRoute({ role, redirectPath = '/login', children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  if (role && user.role !== role) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}