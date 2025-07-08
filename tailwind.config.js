/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerbackgroundcolor: "#f1f1f1",
        headertextcolor: "#272727",
        headertexthoverandactive: "#008bba",
        backgroundcolor: "#f1f1f1",
        primarytextcolor: "#111111",
        footerbackgrouncolor: "#cccccc",
        primary: "#008bba",
        secondary: "#17b1e8",
        tertiary: "#008bba",
        bordercolor: "rgb(255,173,140)",
      },
      fontFamily: {
        astera: ["Astera", "serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
