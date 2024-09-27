/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': '5rem',
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily:{
        Raleway:["Raleway","s-serif"]

      },
      colors:{
        "primary":" #090E16",
        "secondary":" #7B4AE2",

      }
      ,screens:{
        "wide":"1440px"
      }
    },
  },
  plugins: [],
}

