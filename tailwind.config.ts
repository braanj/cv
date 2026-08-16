import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",

  content: [
    "./app/app.vue",
    "./app/error.vue",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/components/**/*.{vue,js,ts}",
    "./app/composables/**/*.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        // Minimal, low-contrast dark palette — no pure black/white, single restrained accent.
        ink: {
          950: "#0B0B0C", // page background
          900: "#131315", // raised surface (cards, nav)
          800: "#1B1B1E", // hover / active surface
          700: "#2A2A2E", // borders, dividers
          500: "#6E6E73", // muted text / placeholders
          300: "#A8A8AD", // secondary text
          100: "#EDEDEF", // primary text
        },
        accent: {
          DEFAULT: "#6FCF97", // muted sage green, low-saturation
          muted: "#4E7A5E",
          subtle: "rgba(111, 207, 151, 0.12)",
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.55" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.75rem", { lineHeight: "1.35" }],
        "3xl": ["2.25rem", { lineHeight: "1.25" }],
      },

      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },

      boxShadow: {
        // Deliberately subtle — minimalism means avoiding heavy elevation/glow.
        sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
        DEFAULT: "0 2px 8px rgba(0, 0, 0, 0.35)",
      },

      maxWidth: {
        content: "1024px",
      },

      spacing: {
        section: "4rem",
      },
    },
  },

  plugins: [],
};
