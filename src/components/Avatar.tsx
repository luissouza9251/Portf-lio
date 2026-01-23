import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg'
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = "Avatar", 
  fallback = "JL",
  size = 'md' 
}) => {
  const [imageError, setImageError] = React.useState(false)
  const [imageLoaded, setImageLoaded] = React.useState(false)

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  }

  React.useEffect(() => {
    if (src) {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageError(true)
      img.src = src
    }
  }, [src])

  if (src && !imageError && imageLoaded) {
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center p-0.5`}>
        <img 
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  // Fallback com iniciais estilizadas
  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center p-0.5 shadow-lg`}>
      <div className="w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-lg flex items-center justify-center font-bold text-purple-700 shadow-inner border border-white/20">
        {fallback}
      </div>
    </div>
  )
}

export default Avatar