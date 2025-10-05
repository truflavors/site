
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 900: "#0E1A1C", 700: "#B74A2E", 500: "#E5B48A" },
        bg: "#F6F1EC",
        muted: "#7C9A92",
        ink: "#0F172A",
      },
    },
  },
  plugins: [],
};
