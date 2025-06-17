import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaSearch, FaUserMd, FaHistory } from 'react-icons/fa'
import CaretakerCard from './CaretakerCard'
import BookingForm from './BookingForm'
import BookingList from './BookingList'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import { motion } from 'framer-motion'
import { CARETAKERS } from '../../utils/constants'

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('caretakers')
  const [selectedCaretaker, setSelectedCaretaker] = useState(null)
  const [bookings, setBookings] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const storedBookings = localStorage.getItem('patientBookings')
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings))
    }
  }, [])

  const handleBookNow = (caretaker) => {
    setSelectedCaretaker(caretaker)
  }

  const handleBookingSubmit = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      caretaker: selectedCaretaker,
      ...bookingData,
      status: 'pending',
      patientName: 'John Patient'
    }
    
    const updatedBookings = [...bookings, newBooking]
    setBookings(updatedBookings)
    localStorage.setItem('patientBookings', JSON.stringify(updatedBookings))
    setSelectedCaretaker(null)
  }

  const filteredCaretakers = CARETAKERS.filter(caretaker =>
    caretaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caretaker.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar role="patient" activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-white">
              {activeTab === 'caretakers' ? 'Available Caretakers' : 'My Bookings'}
            </h1>
            
            {activeTab === 'caretakers' ? (
              <>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search caretakers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCaretakers.map(caretaker => (
                    <CaretakerCard 
                      key={caretaker.id}
                      caretaker={caretaker}
                      onBookNow={handleBookNow}
                    />
                  ))}
                </div>
              </>
            ) : (
              <BookingList bookings={bookings} />
            )}
          </motion.div>
        </main>
      </div>
      
      {selectedCaretaker && (
        <BookingForm
          caretaker={selectedCaretaker}
          onSubmit={handleBookingSubmit}
          onClose={() => setSelectedCaretaker(null)}
        />
      )}
    </div>
  )
}