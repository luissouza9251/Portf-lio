/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      // 8px Grid-based Spacing System
      spacing: {
        // Base 8px grid units
        '0.5': '4px',   // 0.5 * 8px = 4px (micro spacing)
        '1': '8px',     // 1 * 8px = 8px (small spacing)
        '2': '16px',    // 2 * 8px = 16px (medium spacing)
        '3': '24px',    // 3 * 8px = 24px (large spacing)
        '4': '32px',    // 4 * 8px = 32px (xl spacing)
        '5': '40px',    // 5 * 8px = 40px
        '6': '48px',    // 6 * 8px = 48px (xxl spacing)
        '8': '64px',    // 8 * 8px = 64px
        '10': '80px',   // 10 * 8px = 80px (section spacing)
        '12': '96px',   // 12 * 8px = 96px
        '16': '128px',  // 16 * 8px = 128px
        '20': '160px',  // 20 * 8px = 160px
        '24': '192px',  // 24 * 8px = 192px
      },
      // Responsive breakpoints (consistent with design)
      screens: {
        'mobile': '0px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { 'box-shadow': '0 0 20px rgba(59, 130, 246, 0.2)' },
          '100%': { 'box-shadow': '0 0 30px rgba(59, 130, 246, 0.4)' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}