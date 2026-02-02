/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloudy-primary': '#8B6F47', // Brown sugar
        'cloudy-brown': '#8B6F47',
        'cloudy-secondary': '#E8D5C4', // Cream
        'cloudy-accent': '#A67B5B', // Caramel
        'cloudy-success': '#7FB069', // Matcha green
        'cloudy-bg': '#FAF8F6',
        'cloudy-text': '#2D2D2D',
        'cloudy-cream': '#FDFBF7',
        'cloudy-pink': '#F8E8E8',
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
      },
      animation: {
        blob: "blob 7s infinite",
        'float': "float 3s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
    },
  },
  plugins: [],
}
