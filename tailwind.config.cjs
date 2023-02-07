/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      "barlow-semi-condensed": ['"Barlow Semi Condensed"', "sans-serif"],
    },
    colors: {
      primary: {
        white: "hsl(0, 0%, 100%)",
        "dark-text": "hsl(229, 25%, 31%)",
        "score-text": "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
      },
      gradients: {
        scissors: {
          from: "hsl(39, 89%, 49%)",
          to: "hsl(40, 84%, 53%)",
        },
        paper: {
          from: "hsl(230, 89%, 62%)",
          to: "hsl(230, 89%, 65%)",
        },
        rock: {
          from: "hsl(349, 71%, 52%)",
          to: "hsl(349, 70%, 56%)",
        },
        lizard: {
          from: "hsl(261, 73%, 60%)",
          to: "hsl(261, 72%, 63%)",
        },
        cyan: {
          from: "hsl(189, 59%, 53%)",
          to: "hsl(189, 58%, 57%)",
        },
        radial: {
          from: "hsl(214, 47%, 23%)",
          to: "hsl(237, 49%, 15%)",
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
