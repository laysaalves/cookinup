/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ocre': '#D1451E',
        'coral': '#F0633C',
        'light-coral': '#FFDBD1',
        'cream': '#FFFAF3',
        'dark-green': '#263A29',
        'medium-green': '#3D6D4A',
        'gray': '#444444',
        'light-gray': '#EFEFEF',
        'white': '#FFFFFF',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        paytone: ['Paytone One', 'sans-serif'],
      },
      fontSize: {
        'header': '2.75em',
        'header-lg': '3.35625em',
        'subtitle-lg': '1.9375em',
        'paragraph': '1.125em',
        'paragraph-lg': '1.375em',
      },
      lineHeight: {
        'header': '3.3rem',
        'header-lg': '4.0275rem',
        'subtitle-lg': '2.90625rem',
        'paragraph': '1.375rem',
        'paragraph-lg': '1.125rem',
      },
    },
  },
  plugins: [],
}

