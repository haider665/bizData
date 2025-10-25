import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      'xs': ['0.875rem', { lineHeight: '1.25rem' }], // 14px -> increased from 12px
      'sm': ['1rem', { lineHeight: '1.375rem' }],     // 16px -> increased from 14px
      'base': ['1.125rem', { lineHeight: '1.5rem' }], // 18px -> increased from 16px
      'lg': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px -> increased from 18px
      'xl': ['1.375rem', { lineHeight: '1.875rem' }], // 22px -> increased from 20px
      '2xl': ['1.625rem', { lineHeight: '2rem' }],    // 26px -> increased from 24px
      '3xl': ['2rem', { lineHeight: '2.25rem' }],     // 32px -> increased from 30px
      '4xl': ['2.5rem', { lineHeight: '2.75rem' }],   // 40px -> increased from 36px
      '5xl': ['3.25rem', { lineHeight: '3.5rem' }],   // 52px -> increased from 48px
      '6xl': ['4rem', { lineHeight: '4.25rem' }],     // 64px -> increased from 60px
      '7xl': ['5rem', { lineHeight: '5.25rem' }],     // 80px -> increased from 72px
      '8xl': ['6.5rem', { lineHeight: '6.75rem' }],   // 104px -> increased from 96px
      '9xl': ['8.5rem', { lineHeight: '8.75rem' }],   // 136px -> increased from 128px
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 10px 25px rgba(0,0,0,0.05)"
      },
      maxWidth: {
        "8xl": "90rem"
      }
    }
  },
  plugins: []
} satisfies Config;