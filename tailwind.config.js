module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        primary: {DEFAULT: '#058283', dark: '#21333E', light: '#599a9a'},
        'gray': {DEFAULT: '#606d75', medium: '#a7a8ad', light: '#E2E3E7' }
      },
      fontSize: {
        huge: ['60px', '90px'],
        large: ['18px', '26px'],
        normal: ['16px', '24px'],
        small: ['14px', '22px']
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}
