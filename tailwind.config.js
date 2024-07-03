/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./discord.html'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': ' #23272a'
      },
      colors:{
        'text' : '#5865f2;',
      },
      fontFamily: {
        'poetsen': ['Poetsen One', 'sans-serif'],
        'oswald':['Oswald','sans-serif'],
      }
    },
  },
  plugins: [],
}

