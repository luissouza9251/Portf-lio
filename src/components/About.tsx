import { motion } from 'framer-motion'
import { staggerContainer } from '../animations/variants'
import CountUpCard from './CountUpCard'

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: '⚡', class: 'javascript' },
    { name: 'Vue.js', icon: '💚', class: 'vue' },
    { name: 'Quasar', icon: '🔷', class: 'quasar' },
    { name: 'Git', icon: '📝', class: 'git' },
    { name: 'Python', icon: '🐍', class: 'python' },
    { name: 'SQL', icon: '🗄️', class: 'sql' },
    { name: 'PySpark', icon: '⚡', class: 'pyspark' },
    { name: 'Data Lakes', icon: '🏞️', class: 'datalakes' },
    { name: 'ETL', icon: '🔄', class: 'etl' },
    { name: 'React.js', icon: '⚛️', class: 'react' },
    { name: 'GitHub', icon: '🐙', class: 'github' },
    { name: 'Node.js', icon: '🟢', class: 'nodejs' },
    { name: 'Figma', icon: '🎨', class: 'figma' },
    { name: 'CSS', icon: '🎨', class: 'css' },
    { name: 'TypeScript', icon: '📘', class: 'typescript' },
    { name: 'HTML', icon: '🌐', class: 'html' },
    { name: 'Pandas', icon: '🐼', class: 'pandas' },
    { name: 'Material UI', icon: '🎯', class: 'material' }
  ]

  return (
    <section id="about" className="py-16 md:py-24 portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Habilidades</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`skill-card ${skill.class}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{skill.icon}</div>
              <h3 className="text-xs md:text-sm font-semibold text-white mb-1">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Seção Sobre Mim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Sobre Mim</h3>
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6 md:mb-8 px-4">
            Sou desenvolvedor Front-end, com experiência em JavaScript, Vue.js e React. Trabalho principalmente com Vue.js e Quasar, criando interfaces modernas, responsivas e focadas na experiência do usuário.
            Ao longo da minha trajetória, atuei em projetos desafiadores para aplicações web e mobile, sempre buscando performance, usabilidade e código bem estruturado. Também possuo experiência na integração de APIs e conhecimentos em Ciência de Dados, o que me permite compreender melhor o fluxo e o uso das informações nos sistemas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <CountUpCard 
              end={50} 
              suffix="+" 
              label="Projetos Concluídos" 
              delay={0}
            />
            <CountUpCard 
              end={2} 
              suffix="+" 
              label="Anos de Experiência" 
              delay={0.1}
            />
            <CountUpCard 
              end={18} 
              suffix="+" 
              label="Tecnologias" 
              delay={0.2}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About