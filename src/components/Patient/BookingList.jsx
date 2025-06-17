import { FaCalendarAlt, FaClock, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function BookingList({ bookings }) {
  const statusIcons = {
    pending: <FaHourglassHalf className="text-yellow-400" />,
    accepted: <FaCheckCircle className="text-green-400" />,
    rejected: <FaTimesCircle className="text-red-400" />
  }

  return (
    <div className="space-y-4">
      {bookings.length > 0 ? (
        bookings.map(booking => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-lg p-5 border-l-4 border-blue-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">{booking.caretaker.name}</h3>
                <p className="text-blue-400">{booking.caretaker.specialty}</p>
              </div>
              <div className="flex items-center space-x-2">
                {statusIcons[booking.status]}
                <span className={`text-sm ${
                  booking.status === 'accepted' ? 'text-green-400' :
                  booking.status === 'rejected' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="mt-4 flex items-center space-x-6">
              <div className="flex items-center text-gray-300">
                <FaCalendarAlt className="mr-2" />
                <span>{new Date(booking.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaClock className="mr-2" />
                <span>{booking.time}</span>
              </div>
            </div>
            
            {booking.notes && (
              <div className="mt-3 bg-gray-700/50 rounded-lg p-3">
                <p className="text-gray-300 text-sm">{booking.notes}</p>
              </div>
            )}
          </motion.div>
        ))
      ) : (
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="text-gray-500 mb-4">
            <FaCalendarAlt className="mx-auto text-4xl" />
          </div>
          <h3 className="text-lg font-medium text-gray-400">No bookings yet</h3>
          <p className="text-gray-500 mt-1">Book your first appointment with a caretaker</p>
        </div>
      )}
    </div>
  )
}