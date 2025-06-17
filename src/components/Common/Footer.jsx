import { FaHeart, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <FaHeart className="text-red-500" />
            <span>for Vitacure</span>
          </div>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}