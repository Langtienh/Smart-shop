// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{jsx, js}", "./src/index.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Thêm font Roboto vào font-sans
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  variants: {},
  plugins: [],
};
