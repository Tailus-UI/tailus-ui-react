import { Label } from "@radix-ui/react-form";
import React from "react";
import { useContext } from 'react';
import {
    form,
    type LabelProps,
} from "@tailus/themer"
import { FormContext } from "./Field";

export interface FormLabelProps extends LabelProps {
  className?: string;
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & FormLabelProps
  >(({ className, floating, variant, size="md", ...props }, forwardedRef) => {

    const { label } = form();
    
    const {
      variant: contextVariant,
      size: contextSize,
      floating: contextFloating,
      asTextarea:contextAsTextare,
    } = useContext(FormContext);

    variant = variant || contextVariant;
    size = size || contextSize;
    floating = floating || contextFloating;

    return(
      <Label
        ref={forwardedRef}
        className={label({ size, floating, asTextarea:contextAsTextare, variant, className })}
        {...props}
      />
    )
  });

export default FormLabel;