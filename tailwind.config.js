/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
}

