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
          dark: '#060709',
          card: 'rgba(14, 15, 18, 0.85)',
          border: 'rgba(255, 255, 255, 0.16)',
          borderHover: 'rgba(255, 255, 255, 0.42)',
          gold: '#d4af37',
          goldDark: '#aa841c',
          silver: '#d1d5db',
        }
      },
      boxShadow: {
        'card': '0 6px 20px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'card-hover': '0 8px 28px rgba(0, 0, 0, 0.65), inset 0 0 16px rgba(255, 255, 255, 0.08)',
        'featured': '0 8px 30px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'modal': '0 20px 50px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      letterSpacing: {
        'widest-brand': '0.38em',
      }
    },
  },
  plugins: [],
}
