/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        chat1: {
          100: "EEDCFF",
          200: "9B51E0",
        },
        chat2: {
          100: "FCEED3",
          200: "E5A443",
        },
        chat2: {
          100: "D2F2EA",
          200: "43B78D",
        },
      },
    },
  },
  plugins: [],
};
