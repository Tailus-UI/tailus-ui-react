import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    './node_modules/@tailus/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            primary: colors.blue,
            secondary: colors.purple,
            accent: colors.fuchsia,
            danger: colors.red,
            success: colors.green,
            warning: colors.amber,
            info: colors.blue,
            gray: colors.zinc,
            black: colors.black,
            white: colors.white,
        }),
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
plugins: [
        plugin(function ({ addBase, theme, matchUtilities }) {
            addBase({
                ":root": {
                    "--btn-border-radius": theme("borderRadius.md"),
                    "--accordion-border-radius": theme("borderRadius.xl"),
                    "--accordion-shadow" : theme("boxShadow.xl"),
                    "--annonce-border-radius" : theme("borderRadius.full"),
                "--avatar-border-radius": theme("borderRadius.full"),
                    "--avatar-status-position" : theme("spacing.px"),
                },
            });
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        }),
    ],
}  satisfies Config

