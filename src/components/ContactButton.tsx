import { motion } from 'framer-motion'

const ContactButton = () => (
  <motion.a
    href="#contacto"
    className="
      inline-flex items-center justify-center
      rounded-full
      bg-[linear-gradient(123deg,#18011f_7%,#b600a8_37%,#7621b0_72%,#be4c00_100%)]
      text-white
      font-medium uppercase tracking-widest
      px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
      text-xs sm:text-sm md:text-base
      shadow-[inset_0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721b1]
      outline outline-2 outline-white outline-offset-[-3px]
      transition-opacity duration-200
    "
    whileHover={{ opacity: 0.7 }}
    whileTap={{ scale: 0.97 }}
  >
    Contact Me
  </motion.a>
)

export default ContactButton