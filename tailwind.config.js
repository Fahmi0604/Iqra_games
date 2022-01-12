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
        'custom-text': '#282828'
      },
      boxShadow: {
        'notclick': '0 4px #5098FF',
        'click': '0 4px #2E6DCD'
      }
    },
  },
  plugins: [],
}
