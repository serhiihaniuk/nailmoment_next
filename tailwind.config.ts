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
        "accent-green": "hsl(var(--accent-green))",
        "accent-pink": "hsl(var(--accent-pink))",
        "accent-green-foreground": "hsl(var(--accent-green-foreground))",
        "accent-pink-foreground": "hsl(var(--accent-pink-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
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
