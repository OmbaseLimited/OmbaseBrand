const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "light", // Correct key for specifying the default dark theme
  },

  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./node_modules/tw-elements-react/dist/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        ombase: "#128ade",
        ombaseBg: "#dadfe7",
        ombaseFaintBg: "#f3f4f7",
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
