/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mj: ["mj"],
        mjBold: ["mjBold"],
        mjExBold: ["mjExBold"],
        goLight: ["goLight"],
        go: ["go"],
        goBold: ["goBold"],
      },
      backgroundImage: {
        intro:
          "url('https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
};
