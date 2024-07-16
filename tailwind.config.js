/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Abu-abu-Lilac": "#b0acb0",
        "Abu-abu-Putih": "#e2dddf",
        "Turquoise-Muda": "#85ebd9",
        "Hijau-Laut-Tua": "#3d898d",
        "Biru-Abu-abu-Gelap": "#2f404d"
      }
    },
    fontFamily: {
      Orbitron: ["Orbitron, sans-serif"],
    },
    screens: {

    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}