/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'potta': ['Potta One', 'cursive'],
        'holtwood': ['Holtwood One SC', 'serif'],
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translate(-50%, 20px) scale(0.8)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'translate(-50%, 0) scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideUp: 'slideUp 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
