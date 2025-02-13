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
    },
  },
  plugins: [tailwindcssAnimated],
} satisfies Config
