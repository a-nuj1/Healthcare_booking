import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaCheck, FaTimes, FaUserInjured } from 'react-icons/fa'
import BookingCard from './BookingCard'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import { motion } from 'framer-motion'

export default function CaretakerDashboard() {
  const [bookings, setBookings] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const storedBookings = localStorage.getItem('patientBookings')
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings))
    }
  }, [])

  const handleAccept = (bookingId) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: 'accepted' } : booking
    )
    setBookings(updatedBookings)
    localStorage.setItem('patientBookings', JSON.stringify(updatedBookings))
  }

  const handleReject = (bookingId) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: 'rejected' } : booking
    )
    setBookings(updatedBookings)
    localStorage.setItem('patientBookings', JSON.stringify(updatedBookings))
  }

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true
    return booking.status === filter
  })

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar role="caretaker" />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white">Patient Bookings</h1>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`px-4 py-2 rounded-lg ${filter === 'pending' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setFilter('accepted')}
                  className={`px-4 py-2 rounded-lg ${filter === 'accepted' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                >
                  Accepted
                </button>
                <button
                  onClick={() => setFilter('rejected')}
                  className={`px-4 py-2 rounded-lg ${filter === 'rejected' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                >
                  Rejected
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredBookings.length > 0 ? (
                filteredBookings.map(booking => (
                  <BookingCard
                    key={booking.id}
                    booking={booking}
                    onAccept={() => handleAccept(booking.id)}
                    onReject={() => handleReject(booking.id)}
                  />
                ))
              ) : (
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <FaUserInjured className="mx-auto text-4xl text-gray-500 mb-4" />
                  <p className="text-gray-400">No bookings found</p>
                </div>
              )}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}