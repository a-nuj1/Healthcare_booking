import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import AnimatedRoute from './components/Common/AnimatedRoute'
import Home from './pages/Home'
import Login from './components/Auth/Login'
import PatientDashboard from './pages/Patient/Dashboard'
import CaretakerDashboard from './pages/Caretaker/Dashboard'
import NotFound from './pages/NotFound'
import Header from './components/Common/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      <Router>
        {/* <Header/> */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
            <Route path="/login" element={<AnimatedRoute><Login /></AnimatedRoute>} />
            
            <Route path="/patient/dashboard" element={
              <ProtectedRoute role="patient">
                <AnimatedRoute><PatientDashboard /></AnimatedRoute>
              </ProtectedRoute>
            } />
            
            <Route path="/caretaker/dashboard" element={
              <ProtectedRoute role="caretaker">
                <AnimatedRoute><CaretakerDashboard /></AnimatedRoute>
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<AnimatedRoute><NotFound /></AnimatedRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App