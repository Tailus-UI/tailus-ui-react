import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const shadowColor = "gray";

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
            primary: colors.indigo,
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
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
  },
plugins: [
        plugin(function ({ addBase, theme, matchUtilities, addComponents }) {
            addBase({
              ":root": {
                    "--ui-light-border-color" : theme("colors.gray.200"),
                    "--ui-dark-border-color": theme("colors.gray.800"),
                    "--ui-light-border-hover-color": theme("colors.gray.300"),
                    "--ui-dark-border-hover-color": theme("colors.gray.700"),
                   /* 
                    "--annonce-border-radius" : theme("borderRadius.full"),
                    "--avatar-border-radius": theme("borderRadius.full"),
                    "--flag-border-radius": theme("borderRadius.xl"),
                    "--badge-border-radius": theme("borderRadius.full"), 
                    "--menu-border-radius": theme("borderRadius.2xl"),
                    "--alert-border-radius": theme("borderRadius.2xl"),
                    "--toast-border-radius": theme("borderRadius.xl"),
                    "--field-border-radius": theme("borderRadius.lg"),
                    "--switch-border-radius": theme("borderRadius.full"),
                    "--tabs-border-radius": theme("borderRadius.xl"),
                    "--popover-border-radius": theme("borderRadius.xl"),
                    "--tabs-soft-border-radius": theme("borderRadius.full"),
                    "--card-border-radius": theme("borderRadius.3xl"),
                    "--accordion-border-radius": theme("borderRadius.xl"),
                    "--tabs-bottom-indicator-border-radius" : theme("borderRadius.md"),
                    "--tooltip-border-radius": theme("borderRadius.md"),
                    "--btn-border-radius": theme("borderRadius.lg"),
                    */
                    "--btn-border-width" : "2px",
                    "--accordion-shadow" : theme("boxShadow.xl"),
                    "--avatar-status-position": theme("spacing.px"),
                    "--card-light-bg": theme("colors.gray.100"),
                    "--card-dark-bg": theme("colors.gray.950"),
                    "--card-padding": theme("spacing.8"),
                    
                    "--card-shadow": `0 10px 15px -3px var(--card-shadow-appearance), 0 4px 6px -4px var(--card-shadow-appearance)`,
                    "--card-shadow-appearance" : `theme(colors.${shadowColor}.900 / var(--card-shadow-opacity))`,
                    "--card-shadow-opacity": "7.5%",
                    
                    "--feedback-dark-bg": theme("colors.gray.950"),
                    "--feedback-light-border-color": theme("colors.gray.200"),
                    "--feedback-dark-border-color": theme("colors.gray.800"),
                    "--flag-padding": theme("spacing.6"),
                    "--menu-light-bg-opacity": "90%",
                    "--menu-dark-bg-opacity": theme("50%"),
                    "--menu-dark-bg": "theme(colors.gray.950 / 80%)",
                    "--menu-light-border-color": theme("colors.gray.200"),
                    "--menu-dark-border-color": theme("colors.gray.800"),
                    "--menu-light-backdrop-blur": "2rem",
                    "--menu-dark-backdrop-blur": "2rem",
                    "--separator-light-color": theme("colors.gray.200"),
                    "--separator-dark-color": theme("colors.gray.800"),
                    "--select-dark-bg": theme("colors.gray.950"),
                    "--tabs-light-bg": theme("colors.gray.100"),
                    "--tabs-light-border-color": theme("colors.gray.200"),
                    "--tabs-dark-border-color": theme("colors.gray.600"),
                    "--tabs-dark-bg": theme("colors.gray.950"),
                    "--tabs-indicator-light-bg": theme("colors.primary.600"),
                    "--tabs-indicator-dark-bg": theme("colors.gray.800"),
                    
                    "--tabs-bottom-indicator-trigger-dark-bg": theme("colors.gray.800"),
                    "--tabs-bottom-indicator-light-bg": theme("colors.primary.600"),
                "--tabs-bottom-indicator-dark-bg": theme("colors.primary.400"),
                    
                "--popover-padding": theme("spacing.6"),
                

                "--field-light-bg": theme("colors.gray.100"),
                "--field-light-focus-bg": theme("colors.gray.50"),
                "--field-dark-bg": theme("colors.gray.800"),
                "--field-dark-focus-bg": theme("colors.gray.900"),
                "--field-light-border-color": theme("colors.gray.300"),
                "--field-dark-border-color": theme("colors.gray.800"),
                },
            });
          addComponents({
            ".card-shadow": {
              boxShadow: `var(--card-shadow)`
            },
            ".feedback-shadow": {
              boxShadow: `var(--card-shadow)`
            },
            ".menu-shadow": {
              boxShadow: `var(--card-shadow)`
            },
            ".alert-shadow": {
              boxShadow: `var(--card-shadow)`
            }
          })
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        }),
    ],
}  satisfies Config

