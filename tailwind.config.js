/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        dblue: {
          600: 'hsl(209, 23%, 22%)',
          700: 'hsl(207, 26%, 17%)',
          900: 'hsl(200, 15%, 8%)',
        },
        gray: {
          100: 'hsl(0, 0%, 98%)',
          400: 'hsl(0, 0%, 52%)',
        },
      },
    },
  },
  plugins: [],
};
