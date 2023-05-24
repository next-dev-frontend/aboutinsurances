module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        color1: '#142039',  //gray
        color2: '#ff6341',  //orange
        color3: '#27ae60'   //green
      }
    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
