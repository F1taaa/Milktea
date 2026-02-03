/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloudy-primary': '#6E85B7', // Soft Dreamy Blue
        'cloudy-secondary': '#F2BED1', // Soft Pink
        'cloudy-accent': '#B2A4FF', // Soft Purple
        'cloudy-mist': '#E1E9F5', // Very Light Blue
        'cloudy-pink': '#F9E2E2', // Very Light Pink
        'cloudy-vanilla': '#F9F5EB', // Cream
        'cloudy-bg': '#FDFCFB', // Nearly White
        'cloudy-text': '#4A4E69', // Dark Slate Blue
        'cloudy-purple': '#C1AEFC',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Libre Baskerville', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      animation: {
        blob: "blob 10s infinite",
        'float': "float 6s ease-in-out infinite",
        'pulse-slow': "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        }
      },
    },
  },
  plugins: [],
}
