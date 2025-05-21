/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DMSerifText: ['DM Serif Text', 'serif'],
        Poetson: ['Poetson', 'serif'],
        Inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}