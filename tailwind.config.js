const tcontainer = require('tailwindcss-fluid-container');
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fluidContainer: {
      default: {
        maxWidth: {
          default: '800px',
          lg: '1300px',
        },
        padding: {
          default: '1rem',
          lg: '2.5rem',
        },
      },
    },
    extend: {
      colors: {
        // pallette Start
        'sb-blue-main': {
          100: '#cce0ec',
          200: '#99c2d9',
          300: '#66a3c7',
          400: '#3385b4',
          500: '#0066a1',
          600: '#005281',
          700: '#003d61',
          800: '#002940',
          900: '#001420',
        },
        'sb-blue-main-light': {
          100: '#dae9f1',
          200: '#b6d3e4',
          300: '#91bdd6',
          400: '#6da7c9',
          500: '#4891bb',
          600: '#3a7496',
          700: '#2b5770',
          800: '#1d3a4b',
          900: '#0e1d25',
        },
        'sb-blue-main-lighter': {
          100: '#e9f2f7',
          200: '#d3e5ef',
          300: '#bdd7e6',
          400: '#a7cade',
          500: '#91bdd6',
          600: '#7497ab',
          700: '#577180',
          800: '#3a4c56',
          900: '#1d262b',
        },
        'sb-red-accent': {
          100: '#fbdfdd',
          200: '#f7bfbb',
          300: '#f39e99',
          400: '#ef7e77',
          500: '#eb5e55',
          600: '#bc4b44',
          700: '#8d3833',
          800: '#5e2622',
          900: '#2f1311',
        },
        'sb-gray': {
          100: '#f6f7f5',
          200: '#edeeeb',
          300: '#e4e6e1',
          400: '#dbddd7',
          500: '#d2d5cd',
          600: '#a8aaa4',
          700: '#7e807b',
          800: '#545552',
          900: '#2a2b29',
        },

        // pallette End
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [lineClamp, tcontainer],
};
