/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*",
  ],
    theme: {
      container: {
        padding:{
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '9rem',
        },
      },
    },
  
  plugins: [],
}
