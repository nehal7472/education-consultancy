/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
      bgColor: "#F6F9FE",
      bgColor2: "#F1F4F9",
      primary: "#070F41",
      secondary: "#1B9FCB",
      borderColor: "#E0ECFC",
      textBlack: "#000000",
      textWhite: "#FFFFFF",
      textGray: "#4B5563",
      textLightGray: "#9CA3AF",
      textDarkGray: "#374151",
      gradient : '#24579F',
      gradient2 : '#20A0C9',
    },
      boxShadow: {
        "3xl": "1.5px 4.5px 8px 4.5px #dddddd",
      },
    },
  },
  plugins: [],
};
