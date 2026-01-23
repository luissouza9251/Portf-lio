import { useState, useEffect, useRef } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  decimals?: number
  suffix?: string
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  decimals = 0,
  suffix = ''
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true)
          hasStarted.current = true
        }
      },
      { threshold: 0.3 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = start
    const endValue = end

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const currentValue = startValue + (endValue - startValue) * easeOut
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, start, end, duration])

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString()

  return {
    value: displayValue + suffix,
    ref: countRef
  }
}