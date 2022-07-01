/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroDesktop: "url(/src/images/desktop/image-header.jpg)",
        heroMobile: "url(/src/images/mobile/image-header.jpg)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      "primary-dark": "#0A0A0A",
    },
  },
  plugins: [],
};
