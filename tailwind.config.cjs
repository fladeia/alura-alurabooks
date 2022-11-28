/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      blue: {
        700: '#002F52'
      },
      brown: {
        500: '#B87900'
      },
      orange: {
        500: '#EB9B00'
      }
    },
    extend: {}
  },
  plugins: []
}
