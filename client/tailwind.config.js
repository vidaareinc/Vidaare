/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg":
          "url('/src/assets/images/LandingPage/LandingPage_BG2.png')",
      },
    },
  },
  plugins: [],
};
