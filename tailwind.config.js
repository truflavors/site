
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Provide both DEFAULT and numeric shades so bg-brand and bg-brand-700 both work
        brand: {
          DEFAULT: '#B74A2E',
          50:  '#FDF7F5',
          100: '#FBECE7',
          200: '#F6D6CB',
          300: '#F0B8A8',
          400: '#E99A84',
          500: '#E5B48A',
          600: '#C86439',
          700: '#B74A2E',
          800: '#8F3A24',
          900: '#0E1A1C'
        },
        bg: '#F6F1EC',
        muted: '#7C9A92',
        ink: '#0F172A'
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(15,23,42,0.06)',
      },
      ringColor: {
        'brand-30': 'rgba(183,74,46,0.30)'
      },
    }
  },
  plugins: [],
};
