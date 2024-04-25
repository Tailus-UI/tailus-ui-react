import { separator, type SeparatorProps } from "@tailus/themer";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import React from "react";

interface SeparatorVariantProps extends React.ComponentProps<typeof SeparatorPrimitive.Root>, Pick<SeparatorProps, "fancy"> {}
  
const SeparatorRoot = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & SeparatorVariantProps
>(({fancy, className, ...props}, ref) => {
  return (
    <SeparatorPrimitive.Root
      className={separator({fancy, orientation:props.orientation, className})}
      {...props}
      ref={ref}
    />
  );
});

SeparatorRoot.displayName = "Separator";
SeparatorRoot.defaultProps = {
    orientation: "vertical"
}

export default SeparatorRoot;