import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Header() {
  const auth = useContext(AuthContext)
  const { user, logout } = auth || {} 

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="flex items-center"
          >
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Vitacure
              </span>
            </div>
          </motion.div>
          
          {user && (
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-purple-400" />
                <span className="text-white">{user.name}</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="text-gray-300 hover:text-white flex items-center space-x-1"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}