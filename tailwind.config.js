module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Poppins', 'sans-serif']
      },
      colors: {
        'custom-primary': '#4181E2',
        'custom-secondary': '#5098FF',
        'custom-dark': '#2E6DCD',
        'custom-orange': '#FFBE06',
        'custom-text': '#282828',
        'custom-green-primary': '#3FBD82',
        'custom-green-secondary': '#34A46F'
      },
      boxShadow: {
        'notclick': '0 4px #5098FF',
        'click': '0 4px #2E6DCD',
        'custom-shadow-green': '0 4px #34A46F'
      },
      width: {
        '48%': '48%',
        '31%': '31.3%',
        '80%': '80%',
        '90%': '90%'
      },
      margin: {
        '1%': '1%'
      }
    },
  },
  plugins: [],
}
