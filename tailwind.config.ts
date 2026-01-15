import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dashboard specific colors
        sidebar: "#fbfbfc", // Very light gray/white for sidebar
        card: "#ffffff",
        primary: "#e11d48", // Pinkish red for buttons/accent
        secondary: "#1f2937", // Dark gray for secondary text/icons
        muted: "#9ca3af", // Light gray text
        success: "#10b981", // Green for positive stats
        warning: "#f59e0b", // Yellow/Orange
        danger: "#ef4444", // Red
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} satisfies Config;
