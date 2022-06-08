module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6AAB9C",
          secondary: "#F9FBFD",
          accent: "#F9FBFD",
          neutral: "#F9FBFD",
          "base-100": "#F9FBFD",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}