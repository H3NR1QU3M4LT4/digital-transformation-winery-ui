module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'text-color1': '#424242',
        'text-color2': '#757575',
        'icon-success': '#4caf50',
        'icon-warning': '#ff9800',
        'icon-error': ' #f44336',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
