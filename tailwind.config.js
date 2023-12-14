import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"  
  ],
  theme: {
   fontFamily:{
    'BalisongUltra':['BalisongUltra','sans-serif'],
    'poppins': ['var(--font-poppins)'],
  },
  extend: {
    cursor: {
      'custom': 'url(/images/icons/icons8-cursor-50.png), auto',
      'pointer': 'url(/images/icons/icons8-finger-up-50.png), auto',
    },

  },
   
  },
  plugins: [
    nextui(),
    require("tailwindcss-animate"),
    require('tailwindcss-animated')
  ],
  darkMode: 'class',
}
