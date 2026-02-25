import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/background/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          light: "var(--background-light)",
          hover: "var(--background-hover)",
        },
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-light": "var(--muted-light)",
        "muted-subtle": "var(--muted-subtle)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          "2": "var(--accent-2)",
        },
        border: "var(--border)",
        glass: {
          bg: "var(--glass-bg)",
          "bg-hover": "var(--glass-bg-hover)",
          border: "var(--glass-border)",
          "border-hover": "var(--glass-border-hover)",
          shadow: "var(--glass-shadow)",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-eb-garamond)", "EB Garamond", "Georgia", "serif"],
      },
      maxWidth: {
        content: "720px",
      },
      boxShadow: {
        glass: "var(--glass-shadow)",
      },
    },
  },
  plugins: [],
};

export default config;
