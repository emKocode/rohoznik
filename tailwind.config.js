module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'navbar' : '#FFC288',
      'text' : '#FF6701',
    },
    screens: {
      'sm': '640px',
      'md' : '768px',
      'lg': '1024px',
      'xl': '1280px', 
      '2xl': '1536px',
    },
  },
  plugins: [],
}