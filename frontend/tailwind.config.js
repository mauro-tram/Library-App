/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D4A4E',
        'secondary': '#F6F4ED',
        'tertiary': '#EAD3A2',
        'actions': '#FF947B',
      }
    },
  },
  plugins: [],
}

