module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#040404",
        goldLight: "#d8ab4e",
        goldDark: "#b48c36",
        ivory: "#F5F1EB",
        stone: "#D6CEC6",
        gold: "#C9A24D",
        warmGray: "#E6DED5",
        mutedGold: "#A68A5B",
        softGray: "#CFC6BC",
        mocha: {
          900: "#1a100a",
          800: "#2e1e12",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        kavoon: ["Kavoon", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
         anton: ['Anton', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],

      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to bottom, #d8ab4e, #b48c36)",
      },
    },
  },
  plugins: [],
  safelist: [
    'before:content-[""]',
    "before:absolute",
    "before:top-0",
    "before:left-[-100%]",
    "before:w-full",
    "before:h-full",
    "before:bg-gradient-to-r",
    "before:from-white",
    "before:to-transparent",
    "before:opacity-40",
    "before:transition-all",
    "before:duration-700",
    "group-hover:before:left-0",
  ],
};
