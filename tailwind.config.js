/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*', './layout/**/*', './components/**/*'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-theme-color': '#3A8EF6',
        'secondary-theme-color': '#FF855E',
        'primary-component-color': '#FF8000',
        'primary-text-color': '#1E3446',
      },
    },
  },
  plugins: [],
}
