/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily:{
      'raleway': 'Raleway',
      'opens' : 'Open Sans'
    },
    
    extend: {
      colors:{
        primaryB:{
          400:'#212b3d',
          500:'#1c2431',
          600:'#181f2a',
          700:'#0b1523'
        },
        accent:{
          400:'#65e2d9',
          500:'#339ecc',
          red:'#ff4242'
        }
      },
    },
  },
  plugins: [],
}
