module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '15350px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '12790px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '10230px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '1179px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
