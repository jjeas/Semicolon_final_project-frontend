/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#01356d", // brand 핵심
          dark: "#012a57",
          light: "#1b4f80",
        },
        secondary: {
          DEFAULT: "#016ca5",
          dark: "#015c8c",
          light: "#1a7fb5",
        },
        accent: {
          DEFAULT: "#0396c7",
          soft: "#04bbdf",
        },
        background: {
          soft: "#90e0ef",
          surface: "#beedf4",
        },
        text: {
          main: "#012a57", // primary 계열로 가독성 높임
          sub: "#334155", // slate 느낌으로 조화
        },
        border: "#e2e8f0",
      },
    },
  },
};
