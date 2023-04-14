/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        monoPT: ["PT Mono", "monospace"],
      },
      colors: {
        primary: "#181818",
        secondary: "#dfdfdf",
        special_green: "#6ed488",
      },
    },
  },
  plugins: [],
};
