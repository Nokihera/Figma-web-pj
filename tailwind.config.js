/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        herobgColor: '#ccdce0',
      },
      boxShadow: {
        'custom-shadow': '5px 9px 28px 0px rgba(0,0,0,0.48)',
        'custom-2': '10px 10px 14px 0px rgba(0,0,0,0.2)',
      },

      fontFamily: {
        'futura': ['futura', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

