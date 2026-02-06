/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(203, 0, 111)",
        "primary-light": "rgb(255, 177, 210)",
        background: "#ffd9b3",
      },
    },
  },
  plugins: [],
};
