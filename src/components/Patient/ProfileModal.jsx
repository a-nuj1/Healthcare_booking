import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaStar, FaCalendarAlt, FaBriefcaseMedical } from 'react-icons/fa'

export default function ProfileModal({ caretaker, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gray-800 rounded-xl max-w-md w-full border border-gray-700 overflow-hidden"
        >
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="absolute -bottom-12 left-6">
              <img 
                src={caretaker.image} 
                alt={caretaker.name}
                className="w-24 h-24 rounded-full border-4 border-gray-800 object-cover"
              />
            </div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="pt-16 px-6 pb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{caretaker.name}</h2>
                <p className="text-purple-400">{caretaker.specialty}</p>
              </div>
              <div className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-white">{caretaker.rating}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaBriefcaseMedical className="text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-300">Experience</h3>
                  <p className="text-white">{caretaker.experience}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaCalendarAlt className="text-purple-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-300">Availability</h3>
                  <p className="text-white">Monday - Friday, 9AM - 5PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">About</h3>
                <p className="text-gray-300">{caretaker.bio}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}