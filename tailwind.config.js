/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#D14C01 !important',
        'custom-logout': '#8E0000',
        'custom-yellow': '#BD7E1B'
      },
      boxShadow: {
        'bottom': "0 4px 4px -1px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
}

