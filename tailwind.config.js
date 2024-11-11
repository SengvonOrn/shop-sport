/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b2b2b2",
        pinkColor: "#ff97cf",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        secondary: {
          100: "#eae3dc",
          200: "#5d7e62",
          300: "#3d85c6",
          400: "#0078ae",
        },
        borderColor: {
          100: "#f88ec0",
        },
      },
      fontFamily: {
        op: "Helvetica Arial Impact Futura ,sans-serif",
      },
      padding: {
        padding: "30px 10px",
        paddingTwo: "34px 10px",
        py1: "1px 0px 2px 0px",
      },
      borderWidth: {
        borderWidth: "1px",
      },
      fontSize: {
        sm: "15px",
      },
      width: {
        400: "500px",
        470: "470px",
      },
      height: {
        300: "300px",
      },
    },
  },
  plugins: [],
};
