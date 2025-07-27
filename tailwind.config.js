/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'potta': ['Potta One', 'cursive'],
        'holtwood': ['Holtwood One SC', 'serif'],
      },
    },
  },
  plugins: [],
};
