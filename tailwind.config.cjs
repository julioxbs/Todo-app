/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-light": 'url("/images/bg-mobile-light.jpg")',
        "desktop-light": 'url("/images/bg-desktop-light.jpg")',
        "active": 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        "mobile-dark": 'url("/images/bg-mobile-dark.jpg")',
        "desktop-dark": 'url("/images/bg-desktop-dark.jpg")',
      },
      backgroundColor: {
        "GrayishBlue-light": "hsl(236, 33%, 92%)",
        "VeryBlue-dark": "hsl(235, 21%, 11%)",
        "DesaturatedBlue-dark": "hsl(235, 24%, 19%)",
      },
      textColor: {
        "Grayish-Blue": "hsl(236, 9%, 61%)",
        "VeryDarkGrayish-Blue": "hsl(235, 19%, 35%)",
        "DarkGrayish-Blue": "hsl(236, 9%, 61%)",
      }
    }
  },
  plugins: [],
}
