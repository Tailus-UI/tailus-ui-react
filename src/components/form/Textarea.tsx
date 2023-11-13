import React from 'react';
import { cn, inputFormVariants } from '../../lib/utils.ts';

const textareaVariants = inputFormVariants("textarea");

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    variant?: "soft" | "outlined";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }

  export const FormTextArea = React.forwardRef<
  HTMLTextAreaElement, TextAreaProps>(({ className, variant, size, ...props }, forwardedRef) => (
  <textarea
    ref={forwardedRef as React.RefObject<HTMLTextAreaElement>}
    className={cn(textareaVariants({ variant, size }), className)}
    {...props}
  />
));

export default FormTextArea;