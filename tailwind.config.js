/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'customegradient1' : 'linear-gradient(to right , #0ea5e9 , #6366f1)',
        'customegradient2' : 'linear-gradient(to right , #8b5cf6 , #d946ef)'
      }
    },
    screens: {
      'sm' : {'max' : '660px'},
      'md': '768px', 
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [],
}