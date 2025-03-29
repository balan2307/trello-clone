/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
        'host-grotesk': ['Host Grotesk', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
} 