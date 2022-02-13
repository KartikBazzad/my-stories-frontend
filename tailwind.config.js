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
      colors: {
        "bg-1": "#162447",
        "bg-2": "#C62A88",
        "bg-3": "#1E5128",
        "bg-4": "#FAEEE7",
        "bg-5": '#5800FF',
        "bg-6": "#FF0075",
      }
    },
  },
  plugins: [],
}