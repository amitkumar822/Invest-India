import netBackground from "../project1/src/photo/Gallery/net-background.jpg";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        rock_backgroumd:
          "url('https://img.freepik.com/premium-photo/texture-wall-concrete-background-wall-fragment-with-scratches-cracks_73989-19158.jpg?w=996')",
      },

      animation: {
        "spin-slow": "spain 10s linear infinite",
        "up-Down": "upDown 4s infinite alternate",
      },

      keyframes: {
        spain: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        upDown: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(20%)" },
        },
      },
      
      fontFamily: {
        worksans: ['"Work Sans"', "sans-serif"], // Define the custom font family
      },
    },
  },
  plugins: [require("daisyui")],
};
