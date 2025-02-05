/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        pingfang: ["PingFangTC", "sans-serif"], // 定義 PingFang 字體
      },
      colors: {
        primary: "#3F5D45",
        secondary: "#FFE180",
      },
      
    },
  },
  plugins: [],
};
