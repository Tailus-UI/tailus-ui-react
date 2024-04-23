import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import React, {createContext, useContext} from "react";
import { cloneElement } from "../../lib/utils.ts";
import { toggle, type ToggleRootProps } from "@tailus/themer";

const {group, root: item, icon } = toggle();

const RootContext = createContext<ToggleRootProps>({
  variant: "soft",
  intent: "primary",
  size: "md"
});

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & ToggleRootProps
>((
  {
    className,
    variant,
    intent,
    size,
    withLabel,
    ...props
  }, forwardedRef
) => {
  
  return (
    <RootContext.Provider value={{variant, intent, size}}>
      <ToggleGroupPrimitive.Root className={group({size, className})} ref={forwardedRef} {...props} />
    </RootContext.Provider>
  );
});

// Creating the ToggleGroupItem component with forwardRef to pass the ref
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & ToggleRootProps
>((
  {
    className,
    variant,
    intent,
    size,
    withLabel,
    ...props
  }, forwardedRef
) => {

  const {
    variant: rootVariant,
    intent: rootIntent,
    size: rootSize
  } = useContext(RootContext);

  variant = variant || rootVariant;
  intent = intent || rootIntent;
  size = size || rootSize;

  return (
    <ToggleGroupPrimitive.Item
      className={item({variant, intent, size, withLabel, className})} ref={forwardedRef} {...props}
    />
  );
});

interface ToggleIconProps {
  className?: string,
  children: React.ReactNode
}

const ToggleGroupIcon = ({className, children}: ToggleIconProps) => {
  const {size} = useContext(RootContext);
  return cloneElement(children as React.ReactElement, icon({size, className}));
};

export default {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
  Icon: ToggleGroupIcon,
}

export {
  ToggleGroupRoot,
  ToggleGroupItem,
  ToggleGroupIcon,
};