import { motion } from 'framer-motion'
import { FaUserInjured, FaCalendarAlt, FaClock, FaCheck, FaTimes } from 'react-icons/fa'

export default function BookingCard({ booking, onAccept, onReject }) {
  const statusColors = {
    pending: 'bg-yellow-500/20 text-yellow-400',
    accepted: 'bg-green-500/20 text-green-400',
    rejected: 'bg-red-500/20 text-red-400'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`bg-gray-800 rounded-xl p-5 border-l-4 ${booking.status === 'accepted' ? 'border-green-500' : booking.status === 'rejected' ? 'border-red-500' : 'border-yellow-500'}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <FaUserInjured className="text-purple-400 text-xl" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white">{booking.patientName}</h3>
            <div className="flex items-center space-x-4 mt-1">
              <div className="flex items-center text-sm text-gray-400">
                <FaCalendarAlt className="mr-1" />
                <span>{new Date(booking.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <FaClock className="mr-1" />
                <span>{booking.time}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`text-xs px-2 py-1 rounded-full ${statusColors[booking.status]}`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </div>
      </div>
      
      {booking.notes && (
        <div className="mt-3 bg-gray-700/50 rounded-lg p-3">
          <p className="text-gray-300 text-sm">{booking.notes}</p>
        </div>
      )}
      
      {booking.status === 'pending' && (
        <div className="flex space-x-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAccept(booking.id)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FaCheck />
            <span>Accept</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onReject(booking.id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FaTimes />
            <span>Reject</span>
          </motion.button>
        </div>
      )}
    </motion.div>
  )
}