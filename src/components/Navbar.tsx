import { motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 navbar-glass"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center p-0.5">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  src="/img/minha-foto.jpg" 
                  alt="Jorge Luis" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Se a imagem não carregar, mostra as iniciais
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement!;
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-lg flex items-center justify-center font-bold text-purple-700 shadow-inner border border-white/20 text-sm">JL</div>';
                  }}
                />
              </div>
            </div>
            <span className="text-lg md:text-xl font-bold text-white">Jorge Luis</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/luissouza9251"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 card-dark rounded-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jorge-luis-89b546252/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 card-dark rounded-xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 card-dark rounded-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-4 px-4 py-3">
                <a
                  href="https://github.com/luissouza9251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 card-dark rounded-lg text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jorge-luis-89b546252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 card-dark rounded-lg text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar