/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('./assets/bg-1.jpg')",
        'hero2': "url('./assets/bg-2.jpg')",
        'hero3': "url('./assets/bg-3.jpg')",
        'hero4': "url('./assets/ba-4.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

