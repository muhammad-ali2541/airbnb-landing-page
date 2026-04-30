/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ede3d1',
          300: '#dfd0b5',
          400: '#cdb590',
          500: '#b89870',
          600: '#a07d55',
          700: '#856447',
          800: '#6d523c',
          900: '#5a4534',
        },
        charcoal: {
          800: '#2a2522',
          900: '#1a1614',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
