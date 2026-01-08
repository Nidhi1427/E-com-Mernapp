/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.jsx",  // ← Add this line
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
