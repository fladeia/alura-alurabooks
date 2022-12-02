/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '1024px',
      desktop: '1728px'
    },
    fontFamily: {
      sans: 'Poppins, sans-serif'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        200: '#326589',
        700: '#002F52'
      },
      brown: {
        500: '#B87900'
      },
      gray: {
        100: '#F9F9F9',
        500: '#858585',
        700: '#474646'
      },
      orange: {
        500: '#EB9B00'
      }
    },
    extend: {
      backgroundImage: {
        'main-bg': "url('./src/assets/images/mainBg.png')"
      }
    }
  },
  plugins: []
}
