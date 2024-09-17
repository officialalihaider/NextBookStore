/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        modern: ['"Modern Antiqua"', "serif"],
      },
      keyframes: {
        "menu-open": {
          "0%": { opacity: "0", transform: "scaleY(0)", transformOrigin:"top" },
          "100%": { opacity: "1", transform: "scaleY(1)", transformOrigin:"top"},
        },
      },
      animation: {
        "menu-open": "menu-open 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
}
