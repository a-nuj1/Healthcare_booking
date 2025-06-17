import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Initialize with default values
export const AuthContext = createContext({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const users = [
      { email: 'patient@vitacure.in', password: 'patient123', role: 'patient', name: 'John Patient' },
      { email: 'nurse@vitacure.in', password: 'nurse123', role: 'caretaker', name: 'Nurse Jane' }
    ]
    
    const foundUser = users.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('user', JSON.stringify(foundUser))
      return { success: true, role: foundUser.role }
    }
    
    return { success: false }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}