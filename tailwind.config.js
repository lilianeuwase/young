/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('/src/img/background/back7.jpeg')",
        about: "url('/src/img/background/back9.jpeg')",
        interview: "url('/src/img/background/back1.jpeg')",
        moreIntro: "url('/src/img/background/blackkid2.jpeg')",
      },
      content: {
        outlineText: '',
      },
    },
  },
  plugins: [],
};
