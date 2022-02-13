module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['Roboto', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
        "open-sans": ['Open Sans', 'sans-serif'],
      },
      height: {
        "94": '21rem'
      },
      maxHeight: {
        "90vh": "80vh",
      }
    },
  },
  plugins: [],
}