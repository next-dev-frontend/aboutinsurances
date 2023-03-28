module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'dark-green': '#023418',
        'light-green': '#008033',
        'dark-gray': '#adb1af',
        'light-gray': '#c7c8c8',
      },
    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}


