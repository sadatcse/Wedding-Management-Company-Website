/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundColor: {
        'cool-gray-900': '#121f21',
      },
    },
  },
  plugins: [require("daisyui")],
}
