import type { Config } from 'tailwindcss'
import { themer, grayColorVariables } from '@tailus/themer'

module.exports =  {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./node_modules/@tailus/themer/dist/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...grayColorVariables
        },
      },
    },
  },
  presets: [
    themer
  ]
} satisfies Config

