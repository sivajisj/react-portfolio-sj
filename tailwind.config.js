/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#030712",
        surface: "#0a0f1d",
        line: "#1b2436",
        accent: {
          DEFAULT: "#7c3aed",
          cyan: "#06b6d4",
          emerald: "#10b981",
          fuchsia: "#d946ef",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(124,58,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.12) 1px, transparent 1px)",
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        "blob-slow": "blob 26s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        blob: {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(40px,-60px) scale(1.1)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}
