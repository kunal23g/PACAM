/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        '1100': '1100ms',
        '1400': '1400ms',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'Guerrilla':['"Protest Guerrilla"', 'system-ui'],
        'lora':['Lora', 'serif'],
        'playfair':["Playfair Display", 'serif']
      }
    },
  },
  plugins: [],
}

