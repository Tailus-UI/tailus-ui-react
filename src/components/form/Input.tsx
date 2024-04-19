import React from 'react';
import { FormContext } from './Field';
import { useContext } from 'react';
import {
    form,
    type InputProps as InputVariants,
} from "@tailus/themer"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, InputVariants {}

export const FormInput = React.forwardRef<
  HTMLInputElement, InputProps>(({ variant, className, size, ...props }, forwardedRef) => {
    const { input } = form();

    const {
      variant: contextVariant,
      size: contextSize,
      floating
    } = useContext(FormContext);

    variant = variant || contextVariant;
    size = size || contextSize;

    if (variant === "soft" && (size === "md" || size === "sm") && floating) {
      throw Error("Floating label is only supported with size `lg` and `xl` for the soft variant !");
    } else if (variant === "plain" && floating) {
      throw Error("Floating label is not supported with the plain variant !");
    }

    return (
      <input
        ref={forwardedRef}
        className={input({ variant, size, floating, className})}
        {...props}
      />
    );
});

export default FormInput;