import {softForm as softTHeme, outlinedForm as outlinedTheme} from "@tailus/themer-form";
import {cva} from "class-variance-authority";

/**
 * Returns soft and outlined variants for input or textarea
 * @param element input or textarea
 * @returns soft and outlined variants for input or textarea
 */
export function inputFormVariants(element: 'input' | 'textarea') {
  return cva("", {
    variants: {
      variant: {
        soft: softTHeme[element].sm,
        outlined: outlinedTheme[element].sm,
      },
      size: {
        xs: outlinedTheme[element].xs,
        sm: outlinedTheme[element].sm,
        md: outlinedTheme[element].md,
        lg: outlinedTheme[element].lg,
        xl: outlinedTheme[element].xl,
      }
    },
    compoundVariants: [
      {
        variant: "soft",
        size: "xs",
        class: softTHeme[element].xs
      },
      {
        variant: "soft",
        size: "sm",
        class: softTHeme[element].sm
      },
      {
        variant: "soft",
        size: "md",
        class: softTHeme[element].md
      },
      {
        variant: "soft",
        size: "lg",
        class: softTHeme[element].lg
      },
      {
        variant: "soft",
        size: "xl",
        class: softTHeme[element].xl
      },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "sm",
    }
  })
}