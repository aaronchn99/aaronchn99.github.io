/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'space-blue': {
          100: '#00354b',
          150: '#002839',
          200: '#001c28',
        }
      },
      'fontFamily': {
        'sans': [ "Space Grotesk", "sans-serif" ] // sans is the default font, applied to <html> tag
      }
    },
  },
  plugins: [],
}

