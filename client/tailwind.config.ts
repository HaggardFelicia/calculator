import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
    },
    extend: {
      boxShadow:{
       'custom': 'inset 5px 5px 8px 0 rgba(115, 115, 115), inset -5px -5px 8px 0 rgba(115, 115, 115)',
      }
    },
  },
  plugins: [],
};
export default config;
