import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {toggleGroup as defaultTheme, highlightToggleGroup as highlightTheme} from "@tailus/themer-toggle-group"
import React, {createContext, useContext} from "react";
import {cloneElement, cn} from "../../lib/utils.ts";

interface Appearance {
  variant: 'default' | 'highlight',
  intent: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const defaultAppearance: Appearance = {
  variant: 'default',
  intent: 'primary',
  size: 'md'
}

interface RootProps {
  variant?: 'default' | 'highlight',
  intent?: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

// Create context with default values
const RootContext = createContext(defaultAppearance);

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root> & RootProps
>((
  {
    className,
    variant = defaultAppearance.variant,
    intent = defaultAppearance.intent,
    size = defaultAppearance.size,
    ...props
  }, forwardedRef
) => {
    // Get variant class names
  const variantClassNames = variant === "default" ? defaultTheme.root : highlightTheme.root;

  return (
    <RootContext.Provider value={{variant: variant, intent: intent, size: size}}>
      <ToggleGroup.Root className={cn(variantClassNames, className)} ref={forwardedRef} {...props} />
    </RootContext.Provider>
  );
});

const ItemContext = createContext(defaultAppearance);

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item> & RootProps
>((
  {
    className,
    variant,
    intent,
    size,
    ...props
  }, forwardedRef
) => {
  // Get root context values
  const {
    variant: rootVariant,
    intent: rootIntent,
    size: rootSize
  } = useContext(RootContext);

  // Apply root context values if not provided
  variant = variant || rootVariant;
  intent = intent || rootIntent;
  size = size || rootSize;

  // Get variant class names
  const variantClassNames = variant === "default" ? defaultTheme.item[size] : highlightTheme.item[intent][size];

  return (
    <ItemContext.Provider value={{variant: variant, intent: intent, size: size}}>
      <ToggleGroup.Item className={cn(variantClassNames, className)} ref={forwardedRef} {...props} />
    </ItemContext.Provider>
  );
});

interface ToggleIconProps {
  className?: string,
  children: React.ReactNode
}

const ToggleGroupIcon = ({className, children}: ToggleIconProps) => {
  // Get root context values
  const {variant, size} = useContext(ItemContext);
  // Get variant class names
  const variantClassNames = variant === 'default'
    ? defaultTheme.icon[size]
    : highlightTheme.icon[size];

  return cloneElement(children as React.ReactElement, cn(variantClassNames, className));
};

const ToggleGroupIconAfter = ({className, children}: ToggleIconProps) => {
  // Get root context values
  const {variant, intent, size} = useContext(ItemContext);
    // Get variant class names
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconAfter[intent][size]
    : highlightTheme.iconAfter[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

const ToggleGroupIconBefore = ({className, children}: ToggleIconProps) => {
  const {variant, size} = useContext(ItemContext);
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconBefore[size]
    : highlightTheme.iconBefore[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

export {
    ToggleGroupRoot,
    ToggleGroupItem,
    ToggleGroupIcon,
    ToggleGroupIconAfter,
    ToggleGroupIconBefore
};