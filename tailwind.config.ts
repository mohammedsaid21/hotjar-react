import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      maxWidth: {
        "8xl": "88rem" /* 1408px */,
        "9xl": "96rem" /* 1536px */,
        "10xl": "104rem" /* 1664px */,
        "11xl": "112rem" /* 1792px */,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        loom: "hsl(var(--loom))",
        loomli: "hsl(var(--loomli))",
        li: "hsl(var(--li))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: {
          "0%": { backgroundPosition: "300% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "-100% 50%" },
        },
        highlighter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shine: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-10px)", opacity: "0" },
        },
        "text-brighten": {
          "0%": { 
            width: "0%",
            color: "hsl(var(--muted-foreground))",
            textShadow: "none"
          },
          "100%": { 
            width: "100%",
            color: "white",
            textShadow: "0 0 1px hsl(var(--primary))"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 30s linear infinite",
        highlighter: "highlighter 1.5s ease-out forwards 5s",
        shine: "shine 8s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.3s ease-out forwards",
        "slide-out-left": "slide-out-left 0.3s ease-in forwards",
        "text-brighten": "text-brighten 1.5s ease-out forwards 5.01s",
        "draw-arrow": "drawArrow 1.5s ease-in-out forwards",
      },
      backgroundImage: {
        "tri-gradient":
          "linear-gradient(45deg, hsl(var(--loomli)), hsl(var(--li)), hsl(var(--loomli)))",
      },
      backgroundSize: {
        "400%": "400%",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
    },
  },
  plugins: [],
};

export default config;
