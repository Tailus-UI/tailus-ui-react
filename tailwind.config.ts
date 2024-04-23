import type { Config } from 'tailwindcss'
import { preset as themer } from '@tailus/themer'

module.exports =  {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}"
  ],
  presets: [
    themer
  ]
} satisfies Config

