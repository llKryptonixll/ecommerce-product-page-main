/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html", "public/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh_Sans: ["Kumbh Sans", "sans-serif"],
      },
      colors:{
        orange: "hsl(26, 100%, 55%)",
        pale_orange: "hsl(26, 100%, 55%)",
        very_dark_blue: "hsl(220, 13%, 13%)",
        dark_grayish_blue: "hsl(219, 9%, 45%)",
        grayish_blue: "hsl(220, 14%, 75%)",
        light_grayish_blue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%, 75%)", // 75% opacity needed

        very_light_orange: "hsl(26, 100%, 55%, 20%)",
        shadow_orange: "hsl(26, 100%, 55%, 40%)",
      }
    },
  },
  plugins: [],
}
