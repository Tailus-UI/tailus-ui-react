import React from 'react';
import { softForm as softTHeme, outlinedForm as outlinedTheme } from "@tailus/themer-form";
import { cva } from "class-variance-authority";
import { cn } from '../../lib/utils.ts';

const inputVarianrs = cva("input", {
  variants: {
    variant: {
      soft: softTHeme.input.sm,
      outlined: outlinedTheme.input.sm,
    },
    size: {
      xs: softTHeme.input.xs,
      sm: outlinedTheme.input.sm,
      md: outlinedTheme.input.md,
      lg: outlinedTheme.input.lg,
      xl: outlinedTheme.input.xl,
    }
  },
  compoundVariants: [
    {
      variant: "soft",
      size: "xs",
      class: softTHeme.input.xs
    },
    {
      variant: "soft",
      size: "sm",
      class: softTHeme.input.sm
    },
    {
      variant: "soft",
      size: "md",
      class: softTHeme.input.md
    },
    {
      variant: "soft",
      size: "lg",
      class: softTHeme.input.lg
    },
    {
      variant: "soft",
      size: "xl",
      class: softTHeme.input.xl
    },
  ],
  defaultVariants: {
    variant: "outlined",
    size: "sm",
  }
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: "soft" | "outlined";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }

export const FormInput: React.FC<InputProps> = ({
  className,
  variant = "outlined",
  size = "sm",
  ...props
}) => (
  <input 
    type={props.type}
    className={cn(inputVarianrs({ variant, size, className }))}
    {...props}
  />
)

export default FormInput;