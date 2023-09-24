/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        '2xl': '1440px',
      },
      fontFamily: {
        sans: ['jost'],
        jakarta: ['jakarta'],
        icon: ['icon'],
      },
      colors: {
        primary: '#EA515E',
        danger: '#D42E2E',
        lightPink: '#FFECF2',
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
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
};
