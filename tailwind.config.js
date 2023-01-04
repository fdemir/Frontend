/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A1BFF",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("@tailwindcss/forms")],
};
