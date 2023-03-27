/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#A40711',
      'primary-dark': '#660000',
      dark: {
        100: '#303030',
        200: '#171717',
        300: '#0B0B0B'
      },
      light: {
        100: '#FFFFFF',
        200: '#E2E2E2',
        300: '#E2E2E2'
      },
      warning: '#FFC75B'
    },
    fontFamily: {
      'sans': ['Big Noodle Titling', 'Sofia Sans Extra Condensed'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
