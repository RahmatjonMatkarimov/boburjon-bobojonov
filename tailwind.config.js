export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f1d67a',
          DEFAULT: '#d4af37',
          dark: '#9a7b1b',
        }
      },
      animation: {
        'rotate-slow': 'rotate 4s linear infinite',
        'shine': 'shine 5s linear infinite',
      },
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        shine: {
          'to': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
}

