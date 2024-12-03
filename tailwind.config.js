/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  safelist: ["material-icons"],
  theme: {
    extend: {
      colors: {
        primary: "#7D4283",
        onBackground: "#4F4D4D",
        description: "#646A69",
        onPrimary: "#FFFFFF",
        background: "#1A1A1A",
        "custom-pink": "#E879F9",
        "custom-purple": "#C75ED05E",
      },
    },
  },
  plugins: [],
};
