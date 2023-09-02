/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "c-primary": "#1A1A1A",
        "c-secondary": "#595E70",
        "c-secondary-fade" : 'rgba(89, 94, 112, 0.25);',
        "c-black-grey": "#2D2D2D",
        "c-body": "#B7B7B7",
        "c-body-fade": "#898989",
        "c-button": '#F5F5F5'
      },
    },
  },
  plugins: [],
};
