import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'jorgesouza9251@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=jorgesouza9251@gmail.com',
      color: 'text-green-400'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/luissouza9251',
      link: 'https://github.com/luissouza9251',
      color: 'text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'jorge-luis-89b546252',
      link: 'https://www.linkedin.com/in/jorge-luis-89b546252/',
      color: 'text-blue-400'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      value: 'Cuiabá - MT',
      link: '#',
      color: 'text-purple-400'
    }
  ]

  return (
    <section id="contact" className="py-20 pb-32 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4"
          >
            Vamos <span className="gradient-text">Conversar?</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Informações de Contato
              </h3>
              
              <p className="text-gray-400 mb-8">
                Prefere uma conversa mais direta? Use qualquer um dos canais abaixo 
                para entrar em contato comigo.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-4 glass-effect rounded-xl hover:bg-white/10 transition-colors duration-300 group"
                >
                  <div className={`${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jorgesouza9251@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg transition-shadow duration-300"
              >
                <Mail size={20} className="mr-2" />
                Enviar Email
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/jorge-luis-89b546252/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 border border-blue-500 rounded-full text-blue-400 hover:bg-blue-500/10 transition-colors duration-300"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Envie uma Mensagem
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Sobre o que você gostaria de conversar?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg transition-shadow duration-300"
              >
                <Send size={20} className="mr-2" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact