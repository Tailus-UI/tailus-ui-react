import type { Config } from 'tailwindcss'
import themer from '@tailus/themer'

export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    './node_modules/@tailus/themer-**/dist/**/*.{js,ts}',
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
          from: { height: "0" },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: "0" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: { opacity: "0", transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: "1", transform: 'translate(-50%, -50%) scale(1)' },
        },
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
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
    themer({
      appearance: "dark", // light | dark | both
      radius : "smooth",
      components: {
        field: {
          rounded: "lg",
          softBg: "100",
          softBgFocus: "50",
          borderColor: "300",
          dark: {
            softBg: "900",
            softBgFocus: "950",
            borderColor: "800",
          }
        }
      }
       /*
      background: "lighter", // light | lighter | hight | higher
      padding: "largest", // small | medium | large | larger | largest
      border: "light", // lighter | light | high | higher 
      radius: "sharp", // boxy | sharp | smooth | smoothest
      shadow: {
        size: "xxl",
        opacity: 5,
      },
      components: {
        accordion: {
          rounded: "none",
          softBg: "200",
          ghostBg:"100",
          shadow: {
            size: "sm",
            opacity: 5,
          },
          dark: {
            softBg: "900",
            ghostBg: "900",
            elevatedBg : "900",
          }
        }, 
        /*
        alert: {
          rounded: "none",
          shadow: {
            size: "md",
            opacity:5,
          }
        },
        annonce: {
          rounded : "md",
        },
        avatar: {
          rounded: "2xl",
          statusInset:"-0.5"
        }, 
        badge: {
          rounded: "md",
        },
        button: {
          rounded: "xl",
          borderWith:"1.5",
        },
        card: {
          rounded: "3xl",
          padding: "12",
          bg: "100",
          shadow: {
            size: "md",
            opacity:4,
          },
          dark: {
            bg:"950",
          }
        },
        menu: {
          rounded: "3xl",
          borderColor: "200",
          bgOpacity: 99,
          backdropBlur: "3",
          shadow: {
            size: "md",
            opacity:3,
          },
          dark: {
            bg: "950",
            borderColor: "800",
            bgOpacity: 50,
            backdropBlur: "5",
          }
        },
        feedback: {
          borderColor : "200",
          shadow: {
            size: "md",
            opacity:4,
          },
          dark: {
            borderColor: "600",
            bg: "950",
          }
        },
        flag: {
          rounded: "xl",
          padding: "4",
        },
        field: {
          rounded: "full",
          softBg: "100",
          softBgFocus: "50",
          borderColor: "300",
          dark: {
            softBg: "900",
            softBgFocus: "950",
            borderColor: "800",
          }
        },
        popover: {
          rounded : "3xl",
        }, 
        switch: {
          rounded:"md"
        },
        select: {
          dark: {
            bg: "950",
          }
        },
        tabs: {
          borderColor: "200",
          listBg: "100",
          rounded: {
            list: "md",
            softVariant: "md",
            bottomIndicatorVariant: "md",
          },
          dark: {
            borderColor: "800",
            listBg: "800",
            triggerBg: "900",
            indicatorBg:"950"
          }
        },
        toast: {
          rounded:"md"
        },
        tooltip: {
          rounded:"md"
        },
      } 
      */
    }),
  ]
}  satisfies Config

