import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {toggleGroup as defaultTheme, highlightToggleGroup as highlightTheme} from "@tailus/themer-toggle-group"
import React, {createContext, useContext} from "react";
import {cloneElement, cn} from "../../lib/utils.ts";

// Defining types for the variants, intents, and sizes
export type Variant = 'default' | 'highlight';
export type Intent = 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Defining the interface for the appearance
interface Appearance {
  variant: Variant,
  intent: Intent,
  size: Size
}

// Defining the default appearance
const defaultAppearance: Appearance = {
  variant: 'default',
  intent: 'primary',
  size: 'md'
}

// Defining the interface for the Root props
interface RootProps {
  variant?: Variant,
  intent?: Intent,
  size?: Size
}

// Creating a context with default values
const RootContext = createContext(defaultAppearance);

// Creating the ToggleGroupRoot component with forwardRef to pass the ref
// The component is wrapped in the RootContext.Provider to provide the context values
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
  // Getting the variant class names
  const variantClassNames = variant === "default" ? defaultTheme.root : highlightTheme.root;

  // Returning the component with the context Provider
  return (
    <RootContext.Provider value={{variant: variant, intent: intent, size: size}}>
      <ToggleGroup.Root className={cn(variantClassNames, className)} ref={forwardedRef} {...props} />
    </RootContext.Provider>
  );
});

// Creating another context for the Item
const ItemContext = createContext(defaultAppearance);

// Creating the ToggleGroupItem component with forwardRef to pass the ref
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
  // Getting the root context values
  const {
    variant: rootVariant,
    intent: rootIntent,
    size: rootSize
  } = useContext(RootContext);

  // Applying root context values if not provided
  variant = variant || rootVariant;
  intent = intent || rootIntent;
  size = size || rootSize;

  // Getting the variant class names
  const variantClassNames = variant === "default" ? defaultTheme.item[size] : highlightTheme.item[intent][size];

  // Returning the component with the context Provider
  return (
    <ItemContext.Provider value={{variant: variant, intent: intent, size: size}}>
      <ToggleGroup.Item className={cn(variantClassNames, className)} ref={forwardedRef} {...props} />
    </ItemContext.Provider>
  );
});

// Defining the interface for the Icon props
interface ToggleIconProps {
  className?: string,
  children: React.ReactNode
}

// Creating the ToggleGroupIcon component
const ToggleGroupIcon = ({className, children}: ToggleIconProps) => {
  // Getting the Item context values
  const {variant, size} = useContext(ItemContext);
  // Getting the variant class names
  const variantClassNames = variant === 'default'
    ? defaultTheme.icon[size]
    : highlightTheme.icon[size];

  // Returning the icon with merged class names
  return cloneElement(children as React.ReactElement, cn(variantClassNames, className));
};

// Creating the ToggleGroupIconAfter component
const ToggleGroupIconAfter = ({className, children}: ToggleIconProps) => {
  // Getting the Item context values
  const {variant, intent, size} = useContext(ItemContext);
  // Getting the variant class names
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconAfter[intent][size]
    : highlightTheme.iconAfter[size];

  // Returning the icon with merged class names
  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

// Creating the ToggleGroupIconBefore component
const ToggleGroupIconBefore = ({className, children}: ToggleIconProps) => {
  const {variant, size} = useContext(ItemContext);
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconBefore[size]
    : highlightTheme.iconBefore[size];

  // Returning the icon with merged class names
  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

// Exporting the components for later use
export {
  ToggleGroupRoot,
  ToggleGroupItem,
  ToggleGroupIcon,
  ToggleGroupIconAfter,
  ToggleGroupIconBefore
};