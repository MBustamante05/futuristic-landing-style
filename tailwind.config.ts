import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dune: ["Dune Rise", "sans-serif"],
        // astralBlack: ["Astral Delight Black", "sans-serif"],
        // astral: ["Astral Delight", "sans-serif"],
        ethnocentric: ["Ethnocentric", "sans-serif"],
        SFDistantOutline: ["SF Distant Galaxy Outline", "sans-serif"],
        // SFDistant: ["SF Distant Galaxy", "sans-serif"],
        GrooveSoul: ["Groove Soul", "sans-serif"],
        akira: ["Akira Expanded", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
