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
        primary: "#06a753",
        secondary: "#5FCEFF",
        "secondary-120": "#33c2ff",
        "status-green": "#8AC44D",
        "status-red": "#E42163",
        "status-blue": "#1E97F5",
        "status-yellow": "#FF9901",
        "shift-background": "#EEFCA1",
        terra: "#e96f5d",
      },
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
      },
      boxShadow: {
        "sheet-footer":
          "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        slideOut: "slideOut 0.3s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
