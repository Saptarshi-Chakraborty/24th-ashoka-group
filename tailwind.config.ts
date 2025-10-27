import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nature-inspired Asoka Group color palette
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc', 
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#66bb6a', // Main leaf green
          500: '#4caf50',
          600: '#2e7d32', // Forest green
          700: '#1b5e20',
          800: '#0d4f0d',
          900: '#063906',
        },
        secondary: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d', // Sunset orange
          400: '#ffa726',
          500: '#ff9800',
          600: '#f57c00',
          700: '#ef6c00',
          800: '#e65100',
          900: '#bf360c',
        },
        accent: {
          50: '#f3f8ff',
          100: '#e1f0ff',
          200: '#c7e2ff',
          300: '#a6d0ff',
          400: '#81baff',
          500: '#64b5f6', // Sky blue
          600: '#2196f3',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        earth: {
          50: '#f5f3f0',
          100: '#e8e2da',
          200: '#d4c4b0',
          300: '#bfa085',
          400: '#a1846a',
          500: '#8d6e63', // Earth brown
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
        sage: {
          50: '#f8fdf8',
          100: '#f1f8f1',
          200: '#e8f5e8',
          300: '#d4edda',
          400: '#c3e6cb',
          500: '#a8d5a8', // Soft sage
          600: '#78c378',
          700: '#56b356',
          800: '#3a8f3a',
          900: '#2f7d2f',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grow': 'grow 2s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grow: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;