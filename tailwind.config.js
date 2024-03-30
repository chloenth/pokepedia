/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '280px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'linear-gradient-primary':
          'linear-gradient(-225deg, #473b7b 0%, #3584a7 51%, #30d2be 100%)',
        'linear-gradient-secondary':
          'linear-gradient(to right, #434343 0%, black 100%)',
      },
    },
  },
  plugins: [],
};
