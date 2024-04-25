import React from 'react';
import { FormContext } from './Field';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import {
    form,
    type InputProps,
} from "@tailus/themer"

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, InputProps {
    size?: Exclude<InputProps["size"], "xs">
  }

  export const FormTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, variant, fancy, size, ...props }, forwardedRef) => {
    
    const { input, textarea } = form({asTextarea:true});
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

    if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
      throw Error("Fancy is not supported with the bottomOutlined or plain variant !");
    }
    
    return (
        <textarea
          ref={forwardedRef as React.RefObject<HTMLTextAreaElement>}
          className={input({ variant, fancy, size, floating, class:twMerge(textarea(), className)})}
          {...props}
        />
    )
  });

export default FormTextArea;