module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plant: {
          light: "#6db69f",
          DEFAULT: "#1A2D35",
          dark: "#0c212a",
        },
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 22.2%": {
            transform: "translateY(0%)",
          },
          "33.3%, 55.5%": {
            transform: "translateY(-25%)",
          },
          "66.6%, 88.8%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
      },
    },
  },
  plugins: [],
};
