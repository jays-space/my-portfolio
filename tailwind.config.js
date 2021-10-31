module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "mobile-360": "360px",
        "mobile-375": "375px",
        "mobile-410": "410px",
        tablet: "630px",
        "tablet-md": "768px",
        "tablet-lg": "980px",
        laptop: "1024px",
        desktop: "1280px",
      },      
      zIndex: {
        n1: "-1",
        50: "50",
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
        1400: "1400ms",
        1800: "1800ms",
        2000: "2000ms",
        2400: "2400ms",
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
