/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f1c', // Azul marino profundo
        gold: {
          DEFAULT: '#d4af37', // Dorado
          light: '#e6c27a',   // Dorado claro
        },
        cloud: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}