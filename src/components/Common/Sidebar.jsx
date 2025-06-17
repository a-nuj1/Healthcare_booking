import { FaHome, FaUserMd, FaHistory, FaCalendarCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Sidebar({ role, activeTab, setActiveTab }) {
  const patientLinks = [
    { name: 'caretakers', icon: FaUserMd, label: 'Caretakers' },
    { name: 'bookings', icon: FaHistory, label: 'My Bookings' }
  ]

  const caretakerLinks = [
    { name: 'dashboard', icon: FaCalendarCheck, label: 'Bookings' }
  ]

  const links = role === 'patient' ? patientLinks : caretakerLinks

  return (
    <motion.aside 
      initial={{ width: 0 }}
      animate={{ width: '16rem' }}
      className="bg-gray-800 border-r border-gray-700 overflow-hidden"
    >
      <div className="p-4 h-full">
        <nav className="mt-6 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.name}
              onClick={() => setActiveTab && setActiveTab(link.name)}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive || activeTab === link.name
                    ? 'bg-purple-600/30 text-white border-l-4 border-purple-500'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <link.icon className="mr-3" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.aside>
  )
}