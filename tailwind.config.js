/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost'],
        icon: ['icon'],
      },
      colors: {
        primary: '#EA515E',
        gradientRed: {
          100: '#F07F3C',
          200: '#C62F79',
        },
        gradientBlue: {
          100: '#AACB98',
          200: '#10A4DB',
          300: '#117DC1',
        },
      },
      spacing: {
        half: '50%',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
};
