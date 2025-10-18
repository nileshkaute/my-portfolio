module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        kavoon: ["Kavoon", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    'before:content-[""]',
    'before:absolute',
    'before:top-0',
    'before:left-[-100%]',
    'before:w-full',
    'before:h-full',
    'before:bg-gradient-to-r',
    'before:from-white',
    'before:to-transparent',
    'before:opacity-40',
    'before:transition-all',
    'before:duration-700',
    'group-hover:before:left-0',
  ],
}