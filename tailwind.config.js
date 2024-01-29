/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        google: ['"Google Sans"', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        float: {
          "0%": {
            transform: "translatey(5px)",
          },
          "25%":{
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(0px)",
            animationTimingFunction: "infinite", 
          },  
          "75%":{
            transform: "translatey(0px)",
          },
          "100%":{
            transform: "translatey(5px)",
          },
        }
      },
      animation: {
        typing: "typing 1.5s steps(20) infinite alternate, blink .7s infinite",
        float: "float 5s ease-in-out infinite"
      },

    },
  },
  plugins: [],
}
