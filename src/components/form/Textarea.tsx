import React from 'react';
import { softForm as softTHeme, outlinedForm as outlinedTheme } from "@tailus/themer-form";
import { cva } from "class-variance-authority";
import { cn } from '../../lib/utils.ts';

const textareaVariants = cva("", {
  variants: {
    variant: {
      soft: softTHeme.textarea.sm,
      outlined: outlinedTheme.textarea.sm,
    },
    size: {
      xs: softTHeme.textarea.xs,
      sm: outlinedTheme.textarea.sm,
      md: outlinedTheme.textarea.md,
      lg: outlinedTheme.textarea.lg,
      xl: outlinedTheme.textarea.xl,
    }
  },
  compoundVariants: [
    {
      variant: "soft",
      size: "xs",
      class: softTHeme.textarea.xs
    },
    {
      variant: "soft",
      size: "sm",
      class: softTHeme.textarea.sm
    },
    {
      variant: "soft",
      size: "md",
      class: softTHeme.textarea.md
    },
    {
      variant: "soft",
      size: "lg",
      class: softTHeme.textarea.lg
    },
    {
      variant: "soft",
      size: "xl",
      class: softTHeme.textarea.xl
    },
  ],
  defaultVariants: {
    variant: "outlined",
    size: "sm",
  }
});

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    variant?: "soft" | "outlined";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }

export const FormTextArea: React.FC<TextAreaProps> = ({
  className,
  variant = "outlined",
  size = "sm",
  ...props
}) => (
  <textarea
    className={cn(textareaVariants({ variant, size, className }))}
    {...props}
  />
)

export default FormTextArea;