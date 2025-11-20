
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

    // If you use UI libraries:
    "./node_modules/@shadcn/ui/**/*.js",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#64748b",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#374151",
        },
        dark: {
          DEFAULT: "#0f172a",
          foreground: "#f8fafc",
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        openSans: ["var(--font-open-sans)", "sans-serif"],
      },

      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
    },
  },

  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    // npm i -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
  ],
};
