/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary-green': '#2e7d32',
        'accent-green': '#4caf50',
        'light-green': '#e8f5e9',
        'cta-green': '#43a047',
        'cta-green-hover': '#388e3c',
        'dark-bg': '#1a1a1a',
        'dark-section': '#212121',
        'off-white': '#f9f9f9',
        'text-dark': '#1c1c1c',
        'text-muted': '#6b6b6b',
        'card-bg': '#ffffff',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'btn': '0 6px 20px rgba(67,160,71,0.35)',
      },
      borderRadius: {
        'card': '12px',
      }
    },
  },
  plugins: [],
}
