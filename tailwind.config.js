/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        toska: '#75ffcc',
        gridcardc: '#0e262c',
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        colors: {
          primary: '#050402',
          secondary: '#1C1D24',
          tertiary: '#131419',
          accent: {
            DEFAULT: '#2dd6ce',
            hover: '#2b8b92',
          },
          paragraph: '#878e99',
        },
      },
    },
    fontFamily: {
      signature: ["Montserrat"],
    }
  },
  plugins: [],
}
