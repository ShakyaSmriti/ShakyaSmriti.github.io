/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#161819',
          light: '#1C1F21',
        },
        paper: {
          DEFAULT: '#FAFAF8',
          dim: '#F2F1ED',
        },
        signal: {
          50: '#EEFBF9',
          100: '#D2F4EF',
          300: '#7FDCD1',
          500: '#0D9488',
          600: '#0B7C72',
          700: '#0A655D',
        },
        pass: '#0D9488',
        warn: '#B45309',
        fail: '#C0392B',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
