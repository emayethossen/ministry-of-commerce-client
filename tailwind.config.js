/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#EFF6FF',
        lightPink: '#FEF2F2',
        lightYellow: '#FEFCE8',
        lightCyan: '#E1F5FE',
      },
    },
  },
  plugins: [],
}

