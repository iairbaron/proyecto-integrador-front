/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Dispositivos móviles (small)
      md: "768px", // Tablets (medium)
      lg: "1024px", // Pantallas grandes (large)
      xl: "1280px", // Pantallas extra grandes (extra large)
    },
  },
  plugins: [],
};
