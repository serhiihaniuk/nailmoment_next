import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-green": "var(--accent-green)",
        "accent-pink": "var(--accent-pink)",
        "primary-card": "var(--primary-card)",
        "accent-green-foreground": "var(--accent-green-foreground)",
        "accent-pink-foreground": "var(--accent-pink-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-foreground-muted": "var(--primary-foreground-muted)",
      },
      fontFamily: {
        asteriks: ["Asteriks", "sans-serif"],
        travels: ["tt-travels", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
