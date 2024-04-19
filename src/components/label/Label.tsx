import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import {
    form,
    type LabelProps,
} from "@tailus/themer"

export interface FormLabelProps extends LabelProps {
  className?: string;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & FormLabelProps
  >(({ className,floating, variant, asTextarea, size = "md", ...props }, forwardedRef) => {
  
  const { label } = form();
    
  return (
    <LabelPrimitive.Root
      ref={forwardedRef}
      className={label({ size, floating, variant, asTextarea, className })}
      {...props}
    />
    )
});

export default Label;