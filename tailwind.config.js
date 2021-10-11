module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "mobile-360": "360px",
        "mobile-375": "375px",
      },
      gradientColorStops: (theme) => ({
        primary: "#F64A00",
      }),
      borderColor: (theme) => ({
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
      transitionDelay: {
        1: "1ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
        1800: "1800ms"
      },
      transitionDuration: {
        10: "10ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
