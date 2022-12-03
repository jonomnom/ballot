/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
