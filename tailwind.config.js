/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Abril Fatface', 'cursive'],
        sugarpeachy: 'var(--font-sugarpeachy)',
        baristo: 'var(--font-baristo)',
      },
      colors: {
        'green-primary': '#004643',
        'baby-blue': '#BAD7E9',
        'green-secondary': '#1B9C85',
        'navy-color': '#3C486B',
        'baby-red': '#E16162',
        'yellow-color': '#F9D949',
        'white-color': '#F0F0F0',
        'dark-primary': '#2C3333',
        'dark-secondary': '#395B64',
      },
      boxShadow: {
        yellow: '5px 5px rgba(249,217,73,1)',
        'yelow-red-blue':
          '5px 5px rgba(249,217,73,1),10px 10px rgba(225,97,98,1),15px 15px rgba(186,215,233,1)',
        'yellow-red-blues':
          '5px 5px rgba(249,217,73,1), 7px 7px rgba(0,0,0,1), 12px 12px rgba(225,97,98,1),14px 14px rgba(0,0,0,1), 19px 19px rgba(138,0,255,1), 21px 21px rgba(0,0,0,1)',
        'pink-yellow-cream':
          '5px 5px rgba(249,217,73,1), 7px 7px rgba(0,0,0,1), 12px 12px #1B9C85, 14px 14px rgba(0,0,0,1), 19px 19px #BDF2D5, 21px 21px #000',
      },
    },
  },
  plugins: [],
};
