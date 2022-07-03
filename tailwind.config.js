/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        mobileL: "426px",
        tablet: "769px",
        laptop: "1024px",
      },
      colors: {
        white: "#fff",
        "soft-red": "#FE7867",
        yellow: "#FAD400",
        "dark-de-cyan-graphic-text": "#25564B",
        "dark-de-blue": "#23303E",
        "dark-blue-photoraphy-text": "#19536B",
        "dark-cyan-footer": "#458C7E",
        "grayish-blue": {
          100: "#A7ABAE",
          200: "#818498",
          300: "#5A636C",
        },
      },
    },
  },
  plugins: [],
};
