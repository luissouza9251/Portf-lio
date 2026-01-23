import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../animations/variants'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com React, TypeScript e integração de pagamentos. Interface moderna e responsiva.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js'],
      image: '🛒',
      github: 'https://github.com/luissouza9251',
      demo: '#',
      category: 'Frontend'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos e métricas de performance.',
      tech: ['Next.js', 'Chart.js', 'API REST', 'PostgreSQL'],
      image: '📊',
      github: 'https://github.com/luissouza9251',
      demo: '#',
      category: 'Frontend'
    },
    {
      title: 'App Mobile PWA',
      description: 'Progressive Web App com design system personalizado, notificações push e funcionalidade offline.',
      tech: ['React', 'PWA', 'Styled Components', 'Firebase'],
      image: '📱',
      github: 'https://github.com/luissouza9251',
      demo: '#',
      category: 'Frontend'
    },
    {
      title: 'Análise Preditiva de Vendas',
      description: 'Sistema de machine learning para previsão de vendas usando algoritmos de regressão e análise temporal.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Plotly'],
      image: '🤖',
      github: 'https://github.com/luissouza9251',
      demo: '#',
      category: 'Data Science'
    },
    {
      title: 'Dashboard BI Empresarial',
      description: 'Plataforma de Business Intelligence para análise de KPIs com visualizações interativas e relatórios automatizados.',
      tech: ['Python', 'Streamlit', 'PostgreSQL', 'Docker'],
      image: '📈',
      github: 'https://github.com/luissouza9251',
      demo: '#',
      category: 'Data Science'
    },
    {
      title: 'Sistema de Recomendação',
      description: 'Engine de recomendação baseado em comportamento do usuário usando deep learning e processamento em tempo real.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      image: '🎯',
      github: 'https://github.com/luissouza9251',
      demo: '#',
      category: 'Data Science'
    }
  ]

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="project-card group"
    >
      {/* Project Header */}
      <div className="relative h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
        <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">
          {project.image}
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
          <div className="flex space-x-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 card-dark rounded-xl text-white hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.1 }}
              className="p-3 card-dark rounded-xl text-white hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.category === 'Frontend' 
              ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
          }`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted mb-3 md:mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="tech-tag text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project links */}
        <div className="flex space-x-2 md:space-x-3 pt-3 md:pt-4 border-t border-gray-700">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex-1 flex items-center justify-center py-2 text-xs md:text-sm card-dark rounded-lg text-gray-300 hover:text-white transition-colors duration-300"
          >
            <Github size={14} className="mr-1 md:mr-2" />
            Código
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            className="flex-1 flex items-center justify-center py-2 text-xs md:text-sm btn-primary rounded-lg"
          >
            <ExternalLink size={14} className="mr-1 md:mr-2" />
            Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-16 md:py-24 portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto px-4">
            Uma seleção dos meus trabalhos mais recentes em desenvolvimento front-end e ciência de dados.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted mb-6">
            Interessado em ver mais projetos?
          </p>
          
          <motion.a
            href="https://github.com/luissouza9251"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-outline inline-flex items-center"
          >
            <Github size={20} className="mr-2" />
            Ver no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects