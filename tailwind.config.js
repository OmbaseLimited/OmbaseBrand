/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "light",
  },

  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./node_modules/tw-elements-react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ombase: "#128ade",
        ombaseBg: "#dadfe7",
        ombaseFaintBg: "#f3f4f7",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
