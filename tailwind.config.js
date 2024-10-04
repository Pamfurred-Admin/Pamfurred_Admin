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
        'custom-logout': '#8E0000'
      },
    },
  },
  plugins: [],
}

