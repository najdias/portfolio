import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      mont: ["var(--font-mont)", ...fontFamily.sans],
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#B63E96",
      primaryDark: "#58E6D9", // 80,230,217
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
    backgroundImage: {
      "circular-light":
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
      "circular-dark":
        "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);",
      "circular-light-lg":
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px);",
      "circular-dark-lg":
        "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 80px);",
      "circular-light-md":
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px);",
      "circular-dark-md":
        "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 6px, #1b1b1b 60px);",
      "circular-light-sm":
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px);",
      "circular-dark-sm":
        "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 4px, #1b1b1b 40px);",
    },
  },
  screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
  },
};
export const plugins = [];
