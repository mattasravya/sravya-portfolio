/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#061311',
          900: '#0B1F1C', // Primary background
          850: '#0E2622',
          800: '#102D28', // Secondary background
          750: '#13332D',
          700: '#163831', // Card background
          650: '#1A423A',
          600: '#1E4C43', // Card hover / border highlight
          500: '#294B42', // Default Border
          400: '#3D6B5F',
        },
        lime: {
          accent: '#B8FF65', // Vibrant lime-green accent
          hover: '#9DEB46',
          light: '#D4FF96',
          glow: 'rgba(184, 255, 101, 0.25)',
        },
        mint: {
          accent: '#7DE5A1', // Soft mint-green highlight
          hover: '#66D48D',
          light: '#A3F0BE',
          glow: 'rgba(125, 229, 161, 0.2)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B6C8C1',
          muted: '#849E95',
        },
        border: {
          dark: '#294B42',
          light: 'rgba(184, 255, 101, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(41, 75, 66, 0.6)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 25px rgba(184, 255, 101, 0.15)',
        'lime-glow': '0 0 25px rgba(184, 255, 101, 0.35)',
        'lime-glow-lg': '0 0 45px rgba(184, 255, 101, 0.45)',
        'mint-glow': '0 0 25px rgba(125, 229, 161, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
