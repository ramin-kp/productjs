/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        LarsseitLight: "Larsseit Light",
        LarsseitMedium: "Larsseit Medium",
        LarsseitBold: "Larsseit Bold",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.7rem",
        },
      },
    },
    screens: {
      xs:"480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
