/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        secondary: "#3498db",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
