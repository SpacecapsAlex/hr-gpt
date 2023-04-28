/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      flex: {
        0: '0 0 auto',
      },
      width: {
        700: '920px',
      },
      borderColor: {
        grey85: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
