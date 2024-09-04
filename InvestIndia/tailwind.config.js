/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['"Work Sans"', "sans-serif"], // Define the custom font family
        robotoHelvAriSan: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        inter: ["Inter", "sans-serif"], 
        poppins: ["Poppins", "sans-serif"],
        roboCondensedSan: ["Roboto Condensed", "sans-serif"]
      },
    },
  },
  plugins: [],
};
