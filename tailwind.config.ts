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
                    "--btn-border-radius": theme("borderRadius.xl"),
                    "--field-border-radius": theme("borderRadius.xl"),
                    "--card-border-radius": theme("borderRadius.2xl"),
                    "--avatar-border-radius": theme("borderRadius.full"),
                    "--avatar-status-position": theme("spacing.px"),
                "--accordion-border-radius": theme("borderRadius.xl"),
                    "--accordion-shadow" : theme("boxShadow.xl"),
                    "--checktokens-border-radius": theme("borderRadius.full"),
                    "--alert-border-radius": theme("borderRadius.xl"),
                    "--badge-border-radius": theme("borderRadius.lg"),
                    "--context-border-radius": theme("borderRadius.2xl"),
                    "--pill-border-radius": theme("borderRadius.xl"),
                    "--toast-border-radius": theme("borderRadius.lg"),
                    "--tabs-border-radius": theme("borderRadius.xl"),
                    "--primary-tabs-border-radius": theme("borderRadius.3xl"),
                    "--popover-border-radius": theme("borderRadius.xl"),
                    "--navmenu-border-radius": theme("borderRadius.3xl"),
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

