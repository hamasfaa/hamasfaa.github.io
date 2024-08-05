/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Neon-Pink": "#FF007F", // Bright and bold, this color captures the neon lights commonly associated with cyberpunk visuals.
        "Electric-Blue": "#00FFFF", // A vivid blue that stands out against darker backgrounds, reminiscent of futuristic interfaces.
        "Cyber-Green": "#00FF00", // A sharp, neon green that adds a toxic or digital feel, often used for text or highlights.
        "Deep-Purple": "#7200CA", // A dark purple that provides depth and mystery, great for backgrounds or shadows.
        "Dark-Gray": "#333333", // A muted dark gray that serves as a neutral base, allowing the neon colors to really pop.
        "Black": "#000000", // The ultimate dark color for contrast, making the neon colors stand out even more.
        "White": "#FFFFFF" // The ultimate light color for contrast, making the neon colors stand out even more.
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
  },
  plugins: [],
}