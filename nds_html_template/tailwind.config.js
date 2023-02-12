/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      'lg': { 'max': '1280px' },
      'md': { 'max': '768px' },
      'sm': {'max': '480px'}
    },

    fontFamily: {
      'sans': ['Fira Sans', 'sans-serif'],
      'search': ['sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}