module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#020202",
      main: "#ffc700",
      white: "#fff",
      purple: "#563afe",
    },
    fontFamily: {
      poppins: "Poppins",
      source: "Source Code Pro, monospace",
    },
    width: {
      main: "16em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
