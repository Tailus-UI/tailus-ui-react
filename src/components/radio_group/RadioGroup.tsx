import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {radioGroup as defaultTheme, shadowVariant as shadowTheme} from "@tailus/themer-radio-group"
import React from "react";
import {cn} from "../../lib/utils.ts";

type Variant = boolean;
const defaultVariant: Variant = false;
const Context = React.createContext<Variant>(defaultVariant);

interface RadioGroupProps {
  withShadow?: Variant;
}

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & RadioGroupProps
>(({withShadow, ...props}, forwardedRef) => {
  withShadow = withShadow || React.useContext(Context);

  return (
    <Context.Provider value={withShadow}>
      <RadioGroupPrimitive.Root
        {...props}
        ref={forwardedRef}
      />
    </Context.Provider>
  )
});

const RadioGroup = {
  Root: RadioGroupRoot,
}

export default RadioGroup;

export {
  RadioGroupRoot,
}