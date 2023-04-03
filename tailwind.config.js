/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease',
      },
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['sans serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        base: {
          100: '#ffffff',
          200: '#f6f6f6',
          300: '#d9d9d9',
          400: '#a7a5a5',
          500: '#111827',
          600: '#000000',
        },
        color: {
          100: '#FF7676',
          150: '#EF4444',
          190: '#BD1212',
          200: '#FF7ACB',
          250: '#EC4899',
          290: '#BA1667',
          300: '#FFD732',
          350: '#FFA500',
          390: '#B95F01',
          400: '#FBFB82',
          450: '#FFFF58',
          490: '#D7D719',
          500: '#48D57C',
          550: '#16A34A',
          590: '#007118',
          600: '#6DFFFF',
          650: '#15E6F3',
          690: '#009FAC',
          700: '#6658FF',
          750: '#3426D6',
          790: '#03039B',
          800: '#A538FA',
          850: '#7306C8',
          890: '#48029D',
        },
      },
      keyframes: {
        fadeIn: {
          from: {opacity: 0},
          to: {opacity: 1},
        },
      },

    },
    plugins: [],
  },
};
