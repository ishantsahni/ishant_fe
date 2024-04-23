/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inputTextFieldShadow: "inset -3px -3px 4px rgba(255, 255, 255, 0.9)"
      }
    },
  },
  plugins: [],
}
