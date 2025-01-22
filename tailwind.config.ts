import type { Config } from "tailwindcss";
import { designSystemPreset } from "@powerhousedao/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [designSystemPreset],
  plugins: [],
} satisfies Config;
