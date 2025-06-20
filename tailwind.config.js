/** @type {import('tailwindcss').Config} */

const colors = require("./styles/colors");


module.exports = {

  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./{components,src,app}/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
    },
  },
}