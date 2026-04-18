/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'jvto-bg': 'var(--color-bg)',
        'jvto-primary': 'var(--color-primary)',
        'jvto-accent': 'var(--color-accent)',
        'jvto-gold': 'var(--color-gold)',
        'jvto-verify': 'var(--color-verify)',
        'jvto-wa': 'var(--color-wa)',
        'jvto-muted': 'var(--color-muted)',
        'jvto-border': 'var(--color-border)',
        'jvto-white': 'var(--color-white)',
      },
      spacing: {
        'section': 'var(--space-section)',
        'group': 'var(--space-group)',
        'element': 'var(--space-element)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'full': 'var(--radius-full)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}
