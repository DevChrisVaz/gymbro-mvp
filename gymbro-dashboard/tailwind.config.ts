/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/preline/dist/*.js',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': {
        '100': '#93dfc0',
        '200': '#77d6b0',
        '300': '#5ccea1',
        '400': '#41c691',
        '500': '#27be82',
        '600': '#21a671',
        '700': '#1d8f61',
        '800': '#187751',
        '900': '#135f41',
      },
      'white': '#FFFFFF',
      'light-green': '#7CD8B3',
      'dark-green': '#26BE81',
      'dark-gray': '#111111',
      'dark-gray-soft': '#161616 ',
      'error': '#ff0000'
    },
    extend: {
      textColor: {
        'black': '#111111',
        'white': '#FFFFFF',
        'primary': '#27be82',
      },
      backgroundColor: {
        'primary': '#27be82',
        'dark': '#111111',
        'light': '#FFFFFF'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, #7CD8B3 0%, #26BE81 100%)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("preline/plugin"),
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}

