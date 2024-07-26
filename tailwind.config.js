// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gold': '#cfaf4e',
        'light-gold': '#e3c76e'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['montserrat', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
