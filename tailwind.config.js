module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        primary: "#F64A00",
      }),
      fontFamily: {
        header: ["Orbitron"],
        body: ["Montserrat"],
      },
      textColor: {
        primary: "#F64A00",
      },
      backgroundColor: {
        primary: "#F64A00",
      },
      height: {
        full3x: "640%",
      },
      backgroundPosition: {
        "center-right": "center right -26.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
