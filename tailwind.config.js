/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "aqua",
      {
        mytheme: {
          primary: "#3abff8",

          secondary: "#828df8",

          accent: "#6366f1",

          neutral: "#1d283a",

          "base-100": "#0f1729",

          info: "#0ca6e9",

          success: "#2bd4bd",

          warning: "#f4c152",

          error: "#fb6f84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
