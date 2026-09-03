/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f3f6fc',
          100: '#dde6f5',
          200: '#c7d4ea',
          500: '#5c6f8f',
          600: '#1c2f57',
          700: '#152443',
          800: '#0f1b33',
          900: '#0a1224',
          950: '#050a14',
        },
        accent: {
          400: '#5b9dff',
          500: '#2f7bf6',
          600: '#1c5fd6',
          700: '#164bab',
        },
        wa: {
          500: '#25D366',
          600: '#1fb959',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(10, 18, 36, 0.06)',
        card: '0 1px 3px rgba(10, 18, 36, 0.08), 0 8px 24px -8px rgba(10, 18, 36, 0.10)',
        'card-hover': '0 4px 12px rgba(10, 18, 36, 0.10), 0 16px 40px -12px rgba(10, 18, 36, 0.18)',
        glow: '0 0 0 1px rgba(47, 123, 246, 0.15), 0 8px 30px -8px rgba(47, 123, 246, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1.2s infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45)' },
          '70%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
