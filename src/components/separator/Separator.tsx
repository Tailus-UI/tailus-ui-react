import { separator, type SeparatorProps } from "@tailus/themer";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import React from "react";

interface SeparatorVariantProps extends React.ComponentProps<typeof SeparatorPrimitive.Root>, SeparatorProps {}
  
const SeparatorRoot = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & SeparatorVariantProps
>(({variant, className, ...props}, ref) => {
  return (
    <SeparatorPrimitive.Root
      className={separator({variant, className})}
      {...props}
      ref={ref}
    />
  );
});

SeparatorRoot.displayName = "Separator";
SeparatorRoot.defaultProps = {
    variant: "fancy",
    orientation: "vertical"
}

export default SeparatorRoot;