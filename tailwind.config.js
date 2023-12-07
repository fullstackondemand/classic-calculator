/** @type {import('tailwindcss').Config} */

const colors = require('./variables/colors');
const fontFamily = require('./variables/fonts');

module.exports = {
  content: [
    "./**/**/*.{html,ts}",
  ],
  theme: {

    // Define Screen Resolution
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    //Define Font Sizes
    fontSize: {
      'inherit': 'inherit',
    },

    //Define Line Height
    lineHeight: {
      'inherit': 'inherit',
    },

    //Define Colors
    colors,

    // Define Font Family
    fontFamily,

    extend: {},
  },
  plugins: [],

  corePlugins: {
    filter: false,

    // Define Opacity 
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,

  }
}