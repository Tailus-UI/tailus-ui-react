import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";
import { useContext } from "react";
import { radio, fancyRadio, type RadioProps } from "@tailus/themer";

export interface RadioRootProps extends RadioProps {
  className?: string;
}

const RadioGroupContext = React.createContext<RadioRootProps>({fancy: false, intent: "primary"});

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & RadioRootProps
  >(({ className, intent, fancy, ...props }, forwardedRef) => {
  
    return (
      <RadioGroupContext.Provider value={{fancy, intent}}>
        <RadioGroupPrimitive.Root
          {...props}
          ref={forwardedRef}
          className={className}
        />
      </RadioGroupContext.Provider>
    )
  });

export interface RadioItemProps {
  fancy?: boolean;
  intent?: RadioProps['intent'];
  className?: string;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & RadioItemProps
  >((props, forwardedRef) => {
    const {intent, fancy} = useContext(RadioGroupContext);
    const {item} = fancy ? fancyRadio({intent}) : radio({intent});
    return (
        <RadioGroupPrimitive.Item
          {...props}
          ref={forwardedRef}
          className={item({className: props.className})}
        />
    )
});

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator> & RadioProps & {
    className?: string;
  }
  >((props, forwardedRef) => {
    const {intent} = useContext(RadioGroupContext);
  const {indicator} = radio({intent});
  return (
    <RadioGroupPrimitive.Indicator
      {...props}
      ref={forwardedRef}
      className={indicator({intent:props.intent, className: props.className})}
    />
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