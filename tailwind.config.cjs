/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0D434F",
        purple: "#164E73",
        lyserod: "#F0768B",
        red: "#FF9999",
      },
      cursor: {
          min: "url(img/kamera2.png) 25 25, pointer",
        },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};


 