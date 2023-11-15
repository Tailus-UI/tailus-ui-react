import {Root} from "@radix-ui/react-form";
import {card as cardTheme} from "@tailus/themer-card";
import React from "react";
import { cn } from "../../lib/utils.ts";

const FormRoot = React.forwardRef<
React.ElementRef<typeof Root>,
React.ComponentPropsWithoutRef<typeof Root>
>(({className, ...props}, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={cn(cardTheme, className)}
      {...props}
    />
));

export default FormRoot;