import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "display-giant": "8.75rem", // 140px
        "display-large": "6.56rem", // 105px
        "display-medium": "4.94rem", // 79px
        "display-small": "3.69rem", // 59px
        "heading-large": "2.75rem", // 44px
        "heading-medium": "2.06rem", // 33px
        "heading-small": "1.56rem", // 25px
        "body-large": "1.19rem", // 19px
        "body-medium": "0.88rem", // 14px
        "body-small": "0.69rem", // 11px
        caption: "0.5rem", // 8px
      },
    },
  },
  plugins: [],
};
export default config;
