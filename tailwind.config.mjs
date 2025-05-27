/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#053026",
        secondary: "#B2EE1B",
        accent: "#FD4101",
        neutral: "#F4F4F4",
        background: "#ffffff",
        muted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["'General Sans'", "sans-serif"],
        display: ["'Clash Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
