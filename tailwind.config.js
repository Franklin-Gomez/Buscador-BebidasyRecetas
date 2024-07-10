/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{tsx,ts,js,jsx}'
  ],
  theme: {
    extend: {
      backgroundImage : { 
        "header" : "url('/bg.jpg')" //bg-header
      }
    },
  },
  plugins: [],
}

