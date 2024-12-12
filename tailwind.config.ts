import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      dark: "#121212",
      light: "#EAE2E2",
      green: "#24E566",
      "dark-green": "#22c55e",
      blue: "#3097F7",
      "lightdark-blue": "#3b82f6",
      "dark-blue": "#0871d2",
      yellow: "#ffc53d",
      pink: "#E8BAEF",
      gray: "#191919",
      "dark-gray": "#2a2a2a",
      "light-gray": "#dedede",
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
