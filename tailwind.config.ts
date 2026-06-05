import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["--font-poppins"],
      },
      colors: {
        'brand-teal': '#008080', // Replace with your exact hex code
      },
    },
  },
  plugins: [],
} satisfies Config;