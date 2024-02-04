import {softForm as softTHeme, outlinedForm as outlinedTheme, mixedForm as mixedTheme} from "@tailus/themer-form";
import { cva } from "class-variance-authority";

const sizesMap = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

/**
 * Returns soft and outlined variants for input or textarea
 * @param element input or textarea
 * @returns soft and outlined variants for input or textarea
 */
export function inputFormVariants(element: 'input' | 'textarea') {
  return cva("", {
    variants: {
      variant: {
        soft: softTHeme[element],
        outlined: outlinedTheme[element],
        mixed : mixedTheme[element]
      },
      size: sizesMap
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
      {
        variant: "outlined",
        size: "xs",
        class: outlinedTheme[element].xs
      },
      {
        variant: "outlined",
        size: "sm",
        class: outlinedTheme[element].sm
      },
      {
        variant: "outlined",
        size: "md",
        class: outlinedTheme[element].md
      },
      {
        variant: "outlined",
        size: "lg",
        class: outlinedTheme[element].lg
      },
      {
        variant: "outlined",
        size: "xl",
        class: outlinedTheme[element].xl
      },
      {
        variant: "mixed",
        size: "xs",
        class: mixedTheme[element].xs
      },
      {
        variant: "mixed",
        size: "sm",
        class: mixedTheme[element].sm
      },
      {
        variant: "mixed",
        size: "md",
        class: mixedTheme[element].md
      },
      {
        variant: "mixed",
        size: "lg",
        class: mixedTheme[element].lg
      },
      {
        variant: "mixed",
        size: "xl",
        class: mixedTheme[element].xl
      },

    ],
    defaultVariants: {
      variant: "outlined",
      size: "md",
    }
  })
}