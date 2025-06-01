/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🍕 Primary brand colors
        primary: {
          light: "#ef4444", // Red 500
          DEFAULT: "#dc2626", // Red 600
          dark: "#b91c1c", // Red 700
        },
        tomato: {
          light: "#fca5a5", // Red 300
          DEFAULT: "#f87171", // Red 400
          dark: "#ef4444", // Red 500
        },
        cheese: {
          light: "#fcd34d", // Amber 300
          DEFAULT: "#f59e0b", // Amber 500
          dark: "#d97706", // Amber 600
        },
        crust: {
          light: "#fde68a", // Amber 200
          DEFAULT: "#d4a276", // Custom brown
          dark: "#92400e", // Amber 800
        },
        basil: {
          light: "#a3e635", // Lime 400
          DEFAULT: "#84cc16", // Lime 500
          dark: "#65a30d", // Lime 600
        },
        olive: {
          light: "#bef264", // Lime 300
          DEFAULT: "#3f6212", // Lime 800
          dark: "#365314", // Lime 900
        },

        // 🔲 Neutrals and backgrounds
        surface: {
          light: "#ffffff", // White
          DEFAULT: "#f8fafc", // Slate 50
          dark: "#f1f5f9", // Slate 100
        },
        warm: {
          light: "#fdf6f0", // Custom off-white
          DEFAULT: "#f5ebe0", // Warm beige
          dark: "#e0d6c6", // Muted taupe
        },
        stone: {
          light: "#e7e5e4", // Stone 200
          DEFAULT: "#78716c", // Stone 500
          dark: "#44403c", // Stone 800
        },
        text: {
          primary: "#0f172a", // Slate 900
          secondary: "#475569", // Slate 600
          light: "#94a3b8", // Slate 400
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Lilita One', 'cursive'],
        pizza: ['Satisfy', 'cursive'],
      },
      boxShadow: {
        'menu': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
