import type { Config } from 'tailwindcss'
import { animations, components, palette, rounded, shade } from '@tailus/themer'

module.exports =  {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./node_modules/@tailus/themer/dist/**/*.{js,ts}",
  ],
  plugins: [
    components,
    rounded,
    palette,
    shade,
    animations,
  ]
} satisfies Config

