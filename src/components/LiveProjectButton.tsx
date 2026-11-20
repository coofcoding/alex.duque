import { motion } from 'framer-motion'

const LiveProjectButton = () => (
  <motion.a
    href="#contacto"
    className="
      inline-flex items-center justify-center
      rounded-full
      border-2 border-[#d7e2ea]
      text-[#d7e2ea]
      font-medium uppercase tracking-widest
      px-8 py-3 sm:px-10 sm:py-3.5
      text-sm sm:text-base
      transition-colors duration-200
    "
    whileHover={{ backgroundColor: 'rgba(215,226,234,0.1)' }}
    whileTap={{ scale: 0.97 }}
  >
    Live Project
  </motion.a>
)

export default LiveProjectButton