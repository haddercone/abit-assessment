import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gg': "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        'tile-gradient' : "linear-gradient(360deg, rgba(0, 0, 0, 0.86) -11.54%, rgba(0, 0, 0, 0) 20.51%),linear-gradient(180deg, rgba(0, 0, 0, 0.6) -3.85%, rgba(0, 0, 0, 0) 36.54%),linear-gradient(0deg, #C4C4C4, #C4C4C4),"
      },
    }
  },
  plugins: [],
};
export default config;
