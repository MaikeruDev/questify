/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fcffe7',
          '100': '#f5ffc1',
          '200': '#f0ff86',
          '300': '#f0ff41',
          '400': '#f8ff0d',
          '500': '#fff900',
          '600': '#d1ba00',
          '700': '#a68702',
          '800': '#89690a',
          '900': '#74550f',
          '950': '#442e04',
      },
      }    
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

