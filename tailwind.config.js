/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'hijau':'#00583B',
        'kuning':'#E5AD23'
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

