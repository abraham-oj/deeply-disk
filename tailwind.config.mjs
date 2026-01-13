/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#FCE7AC',
          500: '#D4AF37',
          700: '#8A6E2F',
        },
        navy: {
          800: '#1e3a8a',
          900: '#0f172a',
          950: '#000000',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
