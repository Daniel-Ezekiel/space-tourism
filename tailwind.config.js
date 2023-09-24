/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "1.4rem",
      base: "1.5rem",
      lg: "1.6rem",
      xl: "2.4rem",
      "2xl": "4rem",
      "3xl": "5.6rem",
      "4xl": "8rem",
      "5xl": "15rem",
      clamp: "clamp(8rem, 12vw, 15rem)",
    },

    spacing: {
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "3.5rem",
      8: "4rem",
      9: "4.5rem",
      10: "5rem",
    },

    borderWidth: {
      DEFAULT: "0.1rem",
      0: "0",
      2: "0.2rem",
      3: "0.3rem",
      4: "0.4rem",
      5: "0.5rem",
    },

    fontFamily: {
      display: ["Bellefair", "serif"],
      body: ["Barlow", "sans-serif"],
      tagline: ["'Barlow Condensed'", "sans-serif"],
    },

    colors: {
      dark: "#0b0d17",
      blue: "#d0d6f9",
      gray: "#979797",
      white: "#fff",
    },

    backgroundImage: {
      "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
      "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
      "home-mobile": "url('/assets/home/background-home-mobile.jpg')",

      "destination-desktop":
        "url('/assets/destination/background-destination-desktop.jpg')",
      "destination-tablet":
        "url('/assets/destination/background-destination-tablet.jpg')",
      "destination-mobile":
        "url('/assets/destination/background-destination-mobile.jpg')",

      "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
      "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
      "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",

      "technology-desktop":
        "url('/src/assets/technology/background-technology-desktop.jpg')",
      "technology-tablet":
        "url('/src/assets/technology/background-technology-tablet.jpg')",
      "technology-mobile":
        "url('/src/assets/technology/background-technology-mobile.jpg')",
    },

    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};

