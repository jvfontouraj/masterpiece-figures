import type { Config } from 'tailwindcss'
import tailwindcssAnimated from 'tailwindcss-animated'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#DBC79A',
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        layer1: 'layer1 3.5s ease-in',
        layer1Objects: 'layer1 2.5s ease-in',
        layer2: 'layer2 6s ease-in',
        layer2image: 'layer2image 5s ease-in',
      },
    },
  },
  plugins: [tailwindcssAnimated],
} satisfies Config
