import * as LabelPrimitive from "@radix-ui/react-label";
import {outlinedForm as theme} from "@tailus/themer-form";
import React from "react";
import {cn} from "../../lib/utils.ts";

type LabelRootProps = {
  size?: "xs" | "sm" | "md",
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelRootProps
>(({className, size = "md", ...props}, forwardedRef) => {
  return (
    <LabelPrimitive.Root
      ref={forwardedRef}
      className={cn(theme.label[size], className)}
      {...props}
    />
    )
});

export default Label;