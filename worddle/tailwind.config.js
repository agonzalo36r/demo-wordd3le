/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "wordle-black": "#000000",
        "wordle-green": "#6AAA64",
        "wordle-yellow": "#CEB02C",
        "wordle-gray": "#939B9F",
        "wordle-dark-blue": "#565F7E",
        "wordle-darker-blue": "#262B3CE3",
        "wordle-light-gray": "#F3F3F3",
        "wordle-lighter-gray": "#DADCE0",
      },
    },
  },
  plugins: [],
};
