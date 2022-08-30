/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width"
      },
      colors: {
        'theme-black': "#1B2435",
    },
  },
},
  plugins: [],
}
