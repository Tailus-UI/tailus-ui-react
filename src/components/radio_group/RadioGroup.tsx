import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {radioGroup as defaultTheme, shadowVariant as shadowTheme} from "@tailus/themer-radio-group"
import React from "react";
import {cn} from "../../lib/utils.ts";

const defaultVariant = false;
const Context = React.createContext<boolean>(defaultVariant);

interface RadioGroupProps {
  withShadow?: boolean;
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

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, forwardedRef) => {
  return (
    <Context.Consumer>
      {withShadow => (
        <RadioGroupPrimitive.Item
          {...props}
          ref={forwardedRef}
          className={cn(withShadow ? shadowTheme.item : defaultTheme.item, props.className)}
        />
      )}
    </Context.Consumer>
  )
});

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>((props, forwardedRef) => {
  return (
    <Context.Consumer>
      {withShadow => (
        <RadioGroupPrimitive.Indicator
          {...props}
          ref={forwardedRef}
          className={cn(withShadow ? shadowTheme.indicator : defaultTheme.indicator, props.className)}
        />
      )}
    </Context.Consumer>
  )
});

const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
}

export default RadioGroup;

export {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
}