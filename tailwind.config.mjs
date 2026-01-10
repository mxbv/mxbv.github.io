/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0d93f2',
        'background-dark': '#0D0D0D',
        'surface-dark': '#141414',
        'surface-border': '#262626',
        'text-dim': '#888888',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 20px -5px rgba(13, 147, 242, 0.3)',
        'neon-hover': '0 0 30px -5px rgba(13, 147, 242, 0.5)',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-text-dim',
    'border-surface-border',
    'bg-surface-border',
    'bg-surface-dark',
    'bg-background-dark',
    'text-primary',
    'bg-primary',
    'border-primary',
  ],
}

