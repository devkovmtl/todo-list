module.exports = {
  enabled: true,
  mode: 'jit',
  purge: {
    mode: 'all',
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
