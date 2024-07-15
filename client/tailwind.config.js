/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        "main-bg":
          "linear-gradient(45deg, rgba(10,37,64,1) 10%, rgba(0,191,255,1) 90%)",
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
            "linear-gradient(45deg, rgba(10,37,64,1) 10%, rgba(0,191,255,1) 90%)",
        },
      });
    },
  ],
};
