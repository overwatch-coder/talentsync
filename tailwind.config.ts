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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#000000",
        "white": "#FFFFFF",
        "blue-dark-400": "#528BFF",
        "blue-dark-700": "#004EEB",
        "blue-100": "#D1E9FF",
        "blue-200": "#B2DDFF",
        "blue-400": "#53B1FD",
        "blue-50": "#EFF8FF",
        "blue-600": "#1570EF",
        "blue-700": "#175CD3",
        "gray-blue-300": "#B3B8DB",
        "gray-50": "#F9FAFB",
        "gray-100": "#F2F4F7",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-800": "#1D2939",
        "gray-900": "#101828",
        "moss-300": "#ACDC79",
        "orange-dark-300": "#FF9C66",
        "primary": "#D6BBFB",
        "rosé": "#FEA3B4",
        "warning-300": "#FEC84B",
        "warning-400": "#FDB022",
      }
    },
  },
  plugins: [],
};
export default config;
