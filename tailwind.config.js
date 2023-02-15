/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    colors: {
      transparent: 'transparent',
      primaryLight: '#537FE7',
      secondaryLight: '#FFF',
      primaryDark: '#2B3140',
      secondaryDark: '#424A5B'
    },
    extend: {}
  },
  plugins: []
};
