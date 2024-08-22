import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors:{
        lama: "#F35C7A",
        pinkStart: 'rgba(243,92,122,1)',
        pinkEnd: 'rgba(253,206,213,1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
       'custom-gradient': 'linear-gradient(174deg, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
     
    },
  },
  plugins: [],
};
export default config;
