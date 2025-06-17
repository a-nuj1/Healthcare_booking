import { Link } from 'react-router-dom'
import { FaUserInjured, FaUserNurse, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Footer from '../components/Common/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Vitacure Healthcare
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connecting patients with professional caretakers for seamless healthcare experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
                <FaUserInjured className="text-blue-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Patient Portal</h2>
              <p className="text-gray-400 mb-6">
                Book appointments with qualified healthcare professionals tailored to your needs.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 group"
              >
                Login as Patient
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6 mx-auto">
                <FaUserNurse className="text-purple-400 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Caretaker Portal</h2>
              <p className="text-gray-400 mb-6">
                Manage patient appointments and provide quality healthcare services.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-300 group"
              >
                Login as Caretaker
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}