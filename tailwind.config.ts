import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      blue: "#3097F7",
      yellow: "#FAE15E",
      pink: "#E8BAEF",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
