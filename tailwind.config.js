/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        red: "#ff0000",
        "dark-gray": "#1b1b1b",
      },
      borderRadius: {
        default: "0.625rem",
      },
      boxShadow: {
        default: "0 6px 6px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
