/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors:{
        'material-white':'#c9c9c9',
        'material-gray' :'#3b3b3b'
      }
    },
  },
  plugins: [],
}