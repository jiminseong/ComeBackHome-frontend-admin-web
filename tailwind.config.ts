/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: "#C40200",
        danger: "#E10E0E",
        success: "#1A8245",
        successLight: "#DAF8E6",
        gray: {
          100: "#F8F8F8",
          200: "#EEEEEE",
          300: "#DFE4EA",
          400: "#848484",
          700: "#444444",
        },
        dark: {
          bg: "#111928",
          text: "#212B36",
        },
        blue: "#3758F9",
        accent: "#FEEEBB",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
    },
  },
  darkMode: "class", // 또는 'media'
  plugins: [],
};
