/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'serif'],
        inter: ['Inter', 'serif'],
      },
      colors: {
        primary: '#65A6F3',
        primaryBg: '#F0F9FF',
        secondaryBg: '#E0F2EE',
        whiteText: '#F8F8F8',
        blackText: '#272B39',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '7rem',
        },
      },
    },
  },
  plugins: [],
};
