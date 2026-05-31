/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gold: "#C9A227",
        blackEgypt: "#0E0E0E",
        beige: "#E8D8B5",
        royalBlue: "#102542",
        whiteCustom: "#FFFFFF",
      },
       fontFamily: {
               petemoss: ['Petemoss', 'cursive'],
  notoSerif: ['Noto Serif SC', 'serif'],
   adamina: ['Adamina', 'serif'],
      },
    },
  },

  plugins: [],
}
