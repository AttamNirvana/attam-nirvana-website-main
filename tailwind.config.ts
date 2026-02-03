import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome Purple Theme - Based on #6e1fd2
        primary: {
          950: '#3a0f7a', // Darkest
          900: '#4a1495', // Darker
          800: '#5a18b3', // Dark
          700: '#6e1fd2', // Base (primary color)
          600: '#8844e2', // Light
          500: '#a366ea', // Lighter
          400: '#ba8aef', // Very light
          300: '#d1aef4', // Subtle
          200: '#e8d2f9', // Very subtle
          100: '#f4e8fc', // Almost white
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(110, 31, 210, 0.08)',
        'md': '0 4px 16px rgba(110, 31, 210, 0.12)',
        'lg': '0 8px 24px rgba(110, 31, 210, 0.16)',
        'xl': '0 12px 32px rgba(110, 31, 210, 0.2)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
      },
    },
  },
  plugins: [],
}

export default config
