import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#061B46",
          foreground: "#FFFFFF"
        },
        navy: {
          50: "#EEF4FF",
          100: "#D8E7FF",
          200: "#BBD4FF",
          300: "#8CB7FF",
          700: "#0B3D91",
          800: "#082B63",
          900: "#061B46",
          950: "#03102D"
        },
        gold: {
          100: "#FFF3D1",
          300: "#F9D77B",
          500: "#F4B740",
          600: "#D99A22"
        },
        green: {
          600: "#0F8A5F",
          700: "#0C6F4F"
        },
        muted: {
          DEFAULT: "#F5F8FC",
          foreground: "#64748B"
        }
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-plus-jakarta)", "sans-serif"]
      },
      boxShadow: {
        premium: "0 18px 45px rgba(6, 27, 70, 0.14)",
        soft: "0 12px 30px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "navy-radial": "radial-gradient(circle at 15% 10%, rgba(244,183,64,0.18), transparent 32%), linear-gradient(135deg, #061B46 0%, #082B63 58%, #0B3D91 100%)"
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        navDropdownIn: {
          "0%": { opacity: "0", transform: "translateY(-6px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        navDropdownOut: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-4px) scale(0.98)" }
        }
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        "nav-dropdown-in": "navDropdownIn 180ms cubic-bezier(0.22, 1, 0.36, 1)",
        "nav-dropdown-out": "navDropdownOut 120ms ease-in forwards"
      }
    }
  },
  plugins: []
};

export default config;
