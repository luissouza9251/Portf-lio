import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-40 border-t border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16 
                      flex flex-col md:flex-row 
                      items-center justify-between gap-6">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-white/60"
        >
          © {currentYear} Jorge Luis. Todos os direitos reservados.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/jorge-luis-89b546252/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white/60 hover:text-purple-400 transition-colors duration-300"
          >
            LinkedIn
          </motion.a>
          
          <motion.a
            href="https://github.com/luissouza9251"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white/60 hover:text-purple-400 transition-colors duration-300"
          >
            GitHub
          </motion.a>
          
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgesouza9251@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white/60 hover:text-purple-400 transition-colors duration-300"
          >
            Email
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer