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
  },
  plugins: [],
};
