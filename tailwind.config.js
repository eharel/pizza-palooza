/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🍕 Primary brand colors
        primary: {
          DEFAULT: "#dc2626", // Red 600
          dark: "#b91c1c", // Red 700
          light: "#f87171", // Red 400
        },
        cheese: {
          light: "#fbbf24", // Amber 400
          DEFAULT: "#f59e0b", // Amber 500
          dark: "#d97706", // Amber 600
        },
        basil: {
          DEFAULT: "#84cc16", // Lime 500
          dark: "#65a30d", // Lime 600
        },
        sauce: {
          DEFAULT: "#fb7185", // Rose 400
          dark: "#f43f5e", // Rose 500
        },

        // 🔲 Neutrals for background and text
        base: {
          light: "#fafafa", // Neutral 50
          DEFAULT: "#f3f4f6", // Neutral 100
          dark: "#e5e7eb", // Neutral 200
        },
        text: {
          primary: "#111827", // Neutral 900
          secondary: "#4b5563", // Neutral 600
        },
        warm: {
          light: "#fdf6f0", // Custom off-white
          DEFAULT: "#f5ebe0", // Warm beige
          dark: "#e0d6c6", // Muted taupe
        },
        stone: {
          light: "#e7e5e4", // Tailwind stone-200
          DEFAULT: "#78716c", // Tailwind stone-500
          dark: "#44403c", // Tailwind stone-800
        },
      },
    },
  },
  plugins: [],
};
