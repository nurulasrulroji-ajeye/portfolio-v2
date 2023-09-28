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
        'white-color': '#FaFaFa',
        'dark-primary': '#2C3333',
        'dark-secondary': '#395B64',

        'typo-neutral-10': '#FFFFFF',
        'typo-neutral-20': '#F5F5F5',
        'typo-neutral-30': '#EDEDED',
        'typo-neutral-40': '#E0E0E0',
        'typo-neutral-50': '#C2C2C2',
        'typo-neutral-60': '#9E9E9E',
        'typo-neutral-70': '#757575',
        'typo-neutral-80': '#616161',
        'typo-neutral-90': '#424242',
        'typo-neutral-100': '#0A0A0A',
      },
      boxShadow: {
        yellow: '5px 5px rgba(249,217,73,1)',
        'yelow-red-blue':
          '5px 5px rgba(249,217,73,1),10px 10px rgba(225,97,98,1),15px 15px rgba(186,215,233,1)',
        'yellow-red-blues':
          '5px 5px rgba(249,217,73,1), 7px 7px rgba(0,0,0,1), 12px 12px rgba(225,97,98,1),14px 14px rgba(0,0,0,1), 19px 19px rgba(138,0,255,1), 21px 21px rgba(0,0,0,1)',
        'pink-yellow-cream':
          '5px 5px rgba(249,217,73,1), 7px 7px rgba(0,0,0,1), 12px 12px #1B9C85, 14px 14px rgba(0,0,0,1), 19px 19px #BDF2D5, 21px 21px #000',
        1: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px -1px 2px 0px rgba(16, 24, 40, 0.06)',
        2: '0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
        6: '0px 0px 13px 0px rgba(13, 15, 19, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      },
    },
  },
  plugins: [],
};
