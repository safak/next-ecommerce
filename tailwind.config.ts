import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("https://images.pexels.com/photos/5706277/pexels-photo-5706277.jpeg?auto=compress&cs=tinysrgb&w=600")',
        hero2:
          'url("https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600")',
        hero3:
          'url("https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600")',

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
