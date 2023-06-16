/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        primaryLight: '#537FE7',
        secondaryLight: '#FFF',
        primaryDark: '#2B3140',
        secondaryDark: '#424A5B'
      },
    }
  },
  plugins: []
};
