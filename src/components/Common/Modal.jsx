import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-gray-800 rounded-xl max-w-md w-full border border-gray-700 overflow-hidden shadow-2xl"
          >
            {title && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <button 
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            )}
            
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}