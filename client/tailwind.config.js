/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        "main-bg": "linear-gradient(to bottom left, #00bfff 20%, #0a2540 50%)",
      },
      backgroundImage: {
        "landing-bg":
          "url('/src/assets/images/LandingPage/LandingPage_BG2.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".main-bg": {
          background:
            "linear-gradient(to bottom left, #00bfff 20%, #0a2540 50%)",
        },
      });
    },
  ],
};
