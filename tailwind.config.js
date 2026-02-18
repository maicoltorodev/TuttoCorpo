/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'mint': '#91d6c2',
          'purple': '#7B61FF',
          'purple-dark': '#5A4A84',
          'deep': '#241244',
          'gray': '#2C3E50',
          'light': '#FDFDFF',
        }
      },
      fontFamily: {
        'sans': ['var(--font-outfit)', 'Inter', 'sans-serif'],
        'display': ['var(--font-plus-jakarta)', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'soft-pattern': 'linear-gradient(to bottom right, #FDFDFF, #F8FAFC)',
        'brand-gradient': 'linear-gradient(135deg, #91d6c2 0%, #7B61FF 100%)',
        'footer-gradient': 'linear-gradient(180deg, #2C3E50 0%, #241244 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
          '50%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(15deg)' },
          '100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
        }
      }


    },
  },
  plugins: [],
}
