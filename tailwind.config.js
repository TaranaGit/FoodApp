/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
         primary: '#FF6363',
         secondary: {
          100: '#E2E2D5',
          200: '#888883'
         },
        'booty-brown':'#964B00',
        'sad-blue':{
          100: '#2933E6',
          200:'#020DE0'
        },
      },
      fontFamily:{
        body:['Roboto']
      }
    },
  },
  plugins: [],
}

