/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{jsx,tsx,ts,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-header': "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}

