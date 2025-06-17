import { motion } from 'framer-motion'
import { FaUserMd, FaStar, FaBookMedical } from 'react-icons/fa'

export default function CaretakerCard({ caretaker, onBookNow }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={caretaker.image} 
              alt={caretaker.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
            />
            <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
              <FaUserMd className="text-white text-xs" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white">{caretaker.name}</h3>
            <p className="text-purple-400">{caretaker.specialty}</p>
            <div className="flex items-center mt-1">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-white">{caretaker.rating}</span>
              <span className="text-gray-400 text-sm ml-2">{caretaker.experience} experience</span>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-gray-300">{caretaker.bio}</p>
        
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onBookNow(caretaker)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FaBookMedical />
            <span>Book Now</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}