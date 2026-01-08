/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ADICIONE ESSA LINHA
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E6C665',
          500: '#D4AF37',
          600: '#AA8C2C',
        },
        black: {
          DEFAULT: '#000000',
          rich: '#1A1A1A', // Fundo principal no modo escuro
          lighter: '#2A2A2A' // Para cartões/elementos no modo escuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}