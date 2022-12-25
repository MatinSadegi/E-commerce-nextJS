/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-c": "#c6ac8f",
        "shadow": "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
