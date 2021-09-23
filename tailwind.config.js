module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#01579b',
        primaryDark:'#002f6c',
        primaryLight:'#4f83cc'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
