import {Root} from "@radix-ui/react-form";
import React from "react";

const FormRoot = React.forwardRef<
React.ElementRef<typeof Root>,
React.ComponentPropsWithoutRef<typeof Root>
>(({className, ...props}, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={className}
      {...props}
    />
));

export default FormRoot;