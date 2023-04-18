/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // mode: 'jit',
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      'gray': '#5F6366',
      'blue': '#4D6D9A',
      'light-purple': '#86B3D1',
      'light-blue': '#99CED3',
      'pink': '#EDB5Bf',
      'white': '#e2e8f0'
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {},
  },
  plugins: [],
}

