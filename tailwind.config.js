/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        seravek: ['Seravek', 'sans-serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

