/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inputTextFieldShadow: "inset 3px 3px 4px 0px #f7f7f7"
      }
    },
  },
  plugins: [],
}
