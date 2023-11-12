/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: '#FE0103',
        gray: '#E1E1E1',
        black: '#0A0A0A',
        darkRed: "#CF0000",
        secondary: '#6B6B6B',

        // "bg-gradient-to-r from-darkRed to-red bg-clip-text text-transparent"
        lightRed: '#FF5336',
        red: '#F2001E'
      },
      fontSize: {
        // Define your custom font sizes here
        'xs':'12px',
        'sm': '16px',
        'base': '1.5rem',
        'lg': '30px',
      },
    },
  },
  plugins: [],
}

