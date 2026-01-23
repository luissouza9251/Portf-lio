import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'

interface CountUpCardProps {
  end: number
  suffix?: string
  label: string
  duration?: number
  delay?: number
}

const CountUpCard: React.FC<CountUpCardProps> = ({ 
  end, 
  suffix = '', 
  label, 
  duration = 2000,
  delay = 0 
}) => {
  const { value, ref } = useCountUp({ 
    end, 
    suffix, 
    duration: duration + delay * 200 
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="card-dark p-4 md:p-6 text-center group hover:border-purple-500/30 transition-all duration-300"
    >
      <div 
        ref={ref}
        className="text-2xl md:text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300"
      >
        {value}
      </div>
      <div className="text-sm md:text-base text-muted group-hover:text-white/80 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  )
}

export default CountUpCard