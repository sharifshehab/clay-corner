/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        text: 'var(--text-color)'
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'], 
        robo: ['Roboto Slab', 'serif'], 
      },
      backgroundImage: {
        testiImg: "url('/src/assets/newsletter-bg.webp')",
       
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


