// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",   // Deep Violet
          light: "#A78BFA",     // Violet-300
          dark: "#5B21B6",      // Violet-700
        },
        secondary: {
          DEFAULT: "#14B8A6",   // Teal-500
          light: "#5EEAD4",     // Teal-300
          dark: "#0F766E",      // Teal-800
        },
        background: {
          light: "#F8FAFC",     // Soft Gray
          dark: "#0B0F19",      // Night Navy
        },
        surface: {
          light: "#FFFFFF",     // White
          dark: "#1E1E2F",      // Slate-ish Black
        },
        accent: {
          DEFAULT: "#EAB308",   // Gold
          light: "#FCD34D",     // Light Yellow
          dark: "#CA8A04",      // Deep Mustard
        },
        muted: {
          light: "#64748B",     // Gray-500
          dark: "#94A3B8",      // Gray-300
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" },
        },
        waveMove: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        "waveMove-fast": "waveMove 6s linear infinite",
        "waveMove-slow": "waveMove 15s linear infinite",
      },
    },
  },
  plugins: [],
};
