import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"
import {Root} from "@radix-ui/react-toggle";
import React from "react";
import {cn} from "../../lib/utils.ts";
import { AppearanceContext } from "./context.ts";
import {ToggleRootProps} from "./interface.ts";

const ToggleRoot = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & ToggleRootProps
>(({
     className,
     variant = 'default',
     size = 'md',
     intent = 'primary',
     ...props
   },
   forwardedRef
) => {
  const variantClassNames = variant === 'default' ? defaultTheme.root[size] : highlightTheme.root[intent][size];
  return (
    <AppearanceContext.Provider value={{variant: variant, intent: intent, size: size}}>
      <Root
        className={cn(variantClassNames, className)}
        ref={forwardedRef}
        {...props}
      />
    </AppearanceContext.Provider>
  )
});

export default ToggleRoot;