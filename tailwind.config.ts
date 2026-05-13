import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      colors: {
        // Pochi — coral pink
        brand: {
          50:  '#FFF1F1',
          100: '#FFE0E0',
          500: '#FF8585',
          600: '#FF6B6B',
          700: '#E04F4F',
          900: '#7A1F1F',
        },
        line: '#06C755',
        ink: '#0f172a',
      },
    },
  },
  plugins: [],
}

export default config
