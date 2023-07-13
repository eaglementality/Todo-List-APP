/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'text-todo': '2.rem',
      },
      background:{
        'blue':'hsl(192, 100%, 67%)',
        'violet' : 'hsl(280, 87%, 65%)'
      },
      backgroundColor: {
        'Verydark':'hsl(235, 21%, 11%)',
        'dark':'hsl(235, 24%, 19%)'
      },
       letterSpacing:{
        'space':'12px'
       },
       screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
  
      // darkMode : 'class'
    },
    // screens: {
    //   'mobile': '375px',
    //   'desktop': '1440px',
    // },
    // dark : 'class'/
  },
  plugins: [],
}
