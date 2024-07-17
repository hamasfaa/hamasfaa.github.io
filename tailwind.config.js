/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Abu-abu-Lilac": "#b0acb0", //(176, 172, 176)
        "Abu-abu-Putih": "#e2dddf", //(226,221,223)
        "Turquoise-Muda": "#85ebd9", //(133,235,217)
        "Hijau-Laut-Tua": "#3d898d", //(61,137,141)
        "Biru-Abu-abu-Gelap": "#2f404d" //(47,64,77)
      }
    },
    fontFamily: {
      Orbitron: ["Orbitron, sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}