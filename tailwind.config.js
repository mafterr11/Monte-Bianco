// Aceternity UI
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
// Aceternity UI

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Aceternity UI
  darkMode: "class",
  // Aceternity UI
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      accent: "#006E9C",
      blue: {
        hover: "#027FB2",
      },
      body: {
        DEFAULT: "#F9FAFF",
        accent: "#ECECEC",
        transparent: "#F9FAFF",
        hover: "#F1F3FF",
      },
      white: {
        DEFAULT: "#FFFFFF",
        text: "#E9E9E9",
      },
      black: {
        DEFAULT: "#1F1F1F",
        text: "#3D3D3D",
      },
      product: {
        1: "#FEFEFE",
        2: "#151515",
        3: "#FFF6DD",
        4: "#AFAAE4",
        5: "#FADF12",
        6: "#DB1C2B",
        7: "#B2015C",
      },
    },
    extend: {
      boxShadow: {
        'button': '2px 3px 3px rgba(0, 0, 0, 0.25)',
        'nav': '0px 3px 5px rgba(0, 0, 0, 0.14)'
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle 1224px at 10.6% 8.8%, rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Aceternity UI
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
// Aceternity UI
