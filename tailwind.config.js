/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    mode: "jit",
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Poppins", "sans-serif"],
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
