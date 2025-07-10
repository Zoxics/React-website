/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        staat: ['"Staatliches"', "sans-serif"],
        body: ['"Space Mono"', "sans-serif"],
      },
      colors: {
        primary: "#be4e2d",
        light: "#eadbbe",
        secondLight: "#d6be95",
        dark: "#1c4848",
      },
    },
  },
  plugins: [],
};
