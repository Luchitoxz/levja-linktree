/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bodoni Moda"', 'Cinzel', 'Didot', 'Playfair Display', 'serif'],
        sans: ['Outfit', 'Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#07080a',
          card: 'rgba(14, 16, 20, 0.75)',
          border: 'rgba(226, 232, 240, 0.22)',
          borderHover: 'rgba(255, 255, 255, 0.65)',
          silver: '#e2e8f0',
          silverLight: '#f8fafc',
          silverDark: '#94a3b8',
          steel: '#64748b',
          graphite: '#1e2229',
        }
      },
      boxShadow: {
        'card': '0 6px 20px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        'card-hover': '0 8px 28px rgba(0, 0, 0, 0.65), 0 0 16px rgba(226, 232, 240, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        'featured': '0 8px 30px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(226, 232, 240, 0.15)',
        'modal': '0 20px 50px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      },
      letterSpacing: {
        'widest-brand': '0.38em',
      }
    },
  },
  plugins: [],
}
