/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    fontFamily: {
      moret: ['Moret', 'serif'],
      leelawadee: ['Leelawadee', 'sans-serif'],
      aurellie: ['Aurellie', 'cursive'],
      roboto: ['Roboto', 'sans-serif'],
      indonesia: ['INDONESIA', 'serif'],
  },


    extend: {
      colors: {
        primary: {
          50: '#003526',
          100: '#003526',
          200: '#003526',
          300: '#003526',
          400: '#003526',
          500: '#003526',
          6000: '#003526',
          700: '#003526',
          800: '#003526',
          900: '#003526',
          // 50: customColors("--c-primary-50"),
          // 100: customColors("--c-primary-100"),
          // 200: customColors("--c-primary-200"),
          // 300: customColors("--c-primary-300"),
          // 400: customColors("--c-primary-400"),
          // 500: customColors("--c-primary-500"),
          // 6000: '#003526',
          // 700: customColors("--c-primary-700"),
          // 800: customColors("--c-primary-800"),
          // 900: customColors("--c-primary-900"),
        },
        yellowCustom: '#FAE200',
        Khaki: '#FFF8E5',
        DarkMustad: '#A45F00',
        Teal: '#008080',
        secondary: {
          50: customColors("--c-secondary-50"),
          100: customColors("--c-secondary-100"),
          200: customColors("--c-secondary-200"),
          300: customColors("--c-secondary-300"),
          400: customColors("--c-secondary-400"),
          500: customColors("--c-secondary-500"),
          6000: customColors("--c-secondary-600"),
          700: customColors("--c-secondary-700"),
          800: customColors("--c-secondary-800"),
          900: customColors("--c-secondary-900"),
        },
        neutral: {
          50: customColors("--c-neutral-50"),
          100: customColors("--c-neutral-100"),
          200: customColors("--c-neutral-200"),
          300: customColors("--c-neutral-300"),
          400: customColors("--c-neutral-400"),
          500: customColors("--c-neutral-500"),
          6000: customColors("--c-neutral-600"),
          700: customColors("--c-neutral-700"),
          800: customColors("--c-neutral-800"),
          900: customColors("--c-neutral-900"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
