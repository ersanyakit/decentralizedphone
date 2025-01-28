const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
const { nextui } = require('@nextui-org/react');
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./src/**/*.{js,ts,jsx,tsx}',  // Make sure this includes all your component files
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        unicorn: {
          iridescent: {
            DEFAULT: '#F0F7FF',
            50: 'rgba(240, 247, 255, 0.05)',
            100: 'rgba(240, 247, 255, 0.1)',
            200: 'rgba(240, 247, 255, 0.2)',
            300: 'rgba(240, 247, 255, 0.3)',
            400: 'rgba(240, 247, 255, 0.4)',
          },
          glass: {
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(31, 41, 55, 0.7)',
          },
          rainbow: {
            blue: '#87CEEB',
            purple: '#DDA0DD',
            pink: '#FFB6C1',
            mint: '#98FF98',
          }
        }
      },
      backdropBlur: {
        'ios': '20px',
        'menu': '30px',
      },
      boxShadow: {
        'ios': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'menu': '0 20px 48px rgba(0, 0, 0, 0.25)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.16)',
        'inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [nextui()],
}