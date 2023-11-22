/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#0D5EAF",
        grey: "rgba(39,39,39,0.1)",
        warning: "#FFF2C3",
      },
      textColor: {
        primary: "#272727",
        secondary: "rgba(39,39,39,0.75)",
        tertiary: "rgba(255,255,255,0.75)",
        white: "#FFF",
        black: "#000",
      },
    },
  },
  plugins: [],
};
