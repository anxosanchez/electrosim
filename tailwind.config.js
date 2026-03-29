/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lab-bg': '#0f172a',
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          'light': 'rgba(255, 255, 255, 0.1)',
          'border': 'rgba(255, 255, 255, 0.1)',
        },
        'electrolyte': {
          blue: '#3b82f6',
          pink: '#ec4899',
          water: '#93c5fd',
        },
        'metal': {
          copper: '#b45309',
          zinc: '#94a3b8',
          carbon: '#1e293b',
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bubble': 'bubble 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bubble: {
          '0%': { transform: 'translateY(100vh) scale(0.5)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) scale(1.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
