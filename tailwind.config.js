/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(141.42% 141.42% at 100% 0%, #F32E0E 0%, #0C0417 100%)',
      },
    },
  },
  plugins: [],
}

