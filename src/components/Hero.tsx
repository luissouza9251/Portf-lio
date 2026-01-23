import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import SectionContainer from './SectionContainer'

const Hero = () => {
  return (
    <SectionContainer 
      spacing="large" 
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-20 pb-40"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header com toggle */}
          <div className="flex justify-between items-center mb-12 md:mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            
            <h1 className="text-xl md:text-2xl font-bold text-white">Portfólio</h1>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-6 bg-gray-700 rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-purple-500 rounded-full transition-transform duration-300"></div>
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Jorge Luis
            </h2>
            <h3 className="text-lg md:text-2xl lg:text-3xl gradient-text mb-6 md:mb-8">
              Desenvolvedor Front End & Cientista de Dados
            </h3>
            <p className="text-base md:text-lg text-muted max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
              Desenvolvedor apaixonado por criar soluções inovadoras e de alta performance. 
              Tenho sólida experiência em grandes projetos, utilizando tecnologias modernas como React.js, 
              Next.js, TypeScript, Redux, Styled Components, Material UI e Tailwind CSS. Sou apaixonado pelo 
              desenvolvimento de componentes reutilizáveis, Design Systems, animações fluidas e por explorar 
              continuamente a performance e a acessibilidade das aplicações.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto"
              >
                Ver Projetos
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline w-full sm:w-auto"
              >
                Entre em Contato
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4 md:space-x-6 mb-12 md:mb-16"
          >
            <motion.a
              href="https://github.com/luissouza9251"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 md:p-4 card-dark rounded-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/jorge-luis-89b546252/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 md:p-4 card-dark rounded-xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgesouza9251@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 md:p-4 card-dark rounded-xl text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted mb-2">Role para baixo</p>
            <ArrowDown size={20} className="text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}

export default Hero

