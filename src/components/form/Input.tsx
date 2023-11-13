import React from 'react';
import { cn, inputFormVariants } from '../../lib/utils.ts';

const inputVariants = inputFormVariants("input");

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: "soft" | "outlined";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }

export const FormInput = React.forwardRef<
  HTMLInputElement, InputProps>(({ className, variant, size, ...props }, forwardedRef) => (
  <input
    ref={forwardedRef as React.RefObject<HTMLInputElement>}
    className={cn(inputVariants({ variant, size, className }))}
    {...props}
  />
));

export default FormInput;