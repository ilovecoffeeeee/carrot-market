module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./componets/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/forms")],
}
