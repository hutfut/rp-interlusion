/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a5568',
          dark: '#2d3748',
        },
        accent: {
          DEFAULT: '#805ad5',
          light: '#9f7aea',
        },
      },
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
        fantasy: ['Luminari', 'Fantasy', 'serif'],
      },
    },
  },
  plugins: [],
} 