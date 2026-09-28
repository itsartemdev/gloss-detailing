/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a0a0a', graphite: '#111211', line: '#292a28', bone: '#f1eee8', muted: '#a6a49f', acid: '#d6ff3f' },
      fontFamily: { sans: ['Manrope', 'sans-serif'], display: ['Unbounded', 'sans-serif'] },
      borderRadius: { '4xl': '2rem' }
    }
  },
  plugins: []
}
