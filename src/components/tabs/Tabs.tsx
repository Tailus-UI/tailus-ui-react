import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  tabs as defaultTheme,
  softTabs as softTheme,
  outlinedTabs as outlinedTheme,
  bottomIndicatorTabs as bottomIndicatorTheme,
} from "@tailus/themer-tabs";
import React from "react";
import {cloneElement, cn} from "../../lib/utils.ts";

type TabsVariant = "default" | "soft" | "outlined" | "bottomIndicator";
type SoftAndOutlinedVariant = "soft" | "outlined";
type DefaultAndBottomVariant = "default" | "bottomIndicator";
type Intent = "primary" | "secondary" | "accent" | "gray" | "neutral";
type Indicator = "elevated" | "outlined";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

const DefaultAndBottomVariantContext = React.createContext<DefaultAndBottomVariant>("default");

const SoftAndOutlinedVariantContext = React.createContext({
  variant: "outlined",
  intent: "primary",
  isSoftOrOutlinedContext: false,
  size: "lg"
});

const theme = {
  default: defaultTheme,
  soft: softTheme,
  outlined: outlinedTheme,
  bottomIndicator: bottomIndicatorTheme,
};

interface TabsRootProps {
  variant?: TabsVariant;
  intent?: Intent;
}

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & TabsRootProps
>(({variant = "default", intent, ...props}, forwardedRef) => {
  if (variant === "soft" || variant === "outlined") {
    return (
      <SoftAndOutlinedVariantContext.Provider
        value={{variant: variant, intent: intent || "primary", isSoftOrOutlinedContext: true, size: "lg"}}
      >
        <TabsPrimitive.Root
          {...props}
          ref={forwardedRef}
        />
      </SoftAndOutlinedVariantContext.Provider>
    )
  }

  if (intent)
    throw new Error(`TabsRoot: intent prop is not used when variant is ${variant}, remove it`);

  return (
    <DefaultAndBottomVariantContext.Provider value={variant}>
      <TabsPrimitive.Root
        {...props}
        ref={forwardedRef}
      />
    </DefaultAndBottomVariantContext.Provider>
  )
});

type TabsListProps = {
  variant?: SoftAndOutlinedVariant,
  size?: Size,
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & TabsListProps
>(({className, variant, size, ...props}, forwardedRef) => {
  let contextVariant;

  const {
    isSoftOrOutlinedContext,
    variant: softAndOutlinedVariantContext,
    size: sizeContext
  } = React.useContext(SoftAndOutlinedVariantContext);

  const defaultAndBottomVariantContext = React.useContext(DefaultAndBottomVariantContext);

  if (!isSoftOrOutlinedContext) {
    contextVariant = defaultAndBottomVariantContext;
  } else {
    contextVariant = softAndOutlinedVariantContext;
  }

  let classNames;

  if (contextVariant === "default") {
    if (size) // Verify that size prop is not used
      throw new Error(`TabsList: size prop is not used when variant is ${contextVariant}, remove it`);
    // Get className for List component
    classNames = theme[contextVariant].list[variant || "outlined"];
  } else if (contextVariant === "bottomIndicator") {
    if (size) // Verify that size prop is not used
      throw new Error(`TabsList: size prop is not used when variant is ${contextVariant}, remove it`);
    if (variant) // Verify that variant prop is not used
      throw new Error(`TabsList: variant prop is not used when variant is ${contextVariant}, remove it`);
    // Get className for List component
    classNames = theme[contextVariant].list;
  } else if (contextVariant === "soft" || contextVariant === "outlined") {
    if (variant) // Verify that variant prop is not used
      throw new Error(`TabsList: variant prop is not used in ${contextVariant} variant, remove it`);
    // Get className for List component
    classNames = theme[contextVariant].list[size || sizeContext as Size];
  }

  return (
    <TabsPrimitive.List
      {...props}
      ref={forwardedRef}
      className={cn(classNames, className)}
    />
  )
});

type TabsTriggerProps = {
  intent?: Intent;
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentProps<typeof TabsPrimitive.Trigger> & TabsTriggerProps
>(({className, intent, ...props}, forwardedRef) => {
  const contextVariant = React.useContext(DefaultAndBottomVariantContext);
  const {
    variant: softAndOutlinedVariantContext,
    intent: intentContext,
    isSoftOrOutlinedContext
  } = React.useContext(SoftAndOutlinedVariantContext);
  let classNames;

  if (isSoftOrOutlinedContext) {
    classNames = theme[softAndOutlinedVariantContext as SoftAndOutlinedVariant].trigger[intent || intentContext as Intent];
  } else {
    if (intent) // Verify that intent prop is not used
      throw new Error(`TabsTrigger: intent prop is not used in ${contextVariant} variant`);
    // Get className for Trigger component
    classNames = theme[contextVariant as TabsVariant].trigger;
  }

  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={cn(classNames, className)}
    />
  )
});

type TabsIndicatorProps = {
  indicator?: Indicator;
};

const TabsIndicator = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentProps<"span"> & TabsIndicatorProps
>(({className, indicator, ...props}, forwardedRef) => {
  const variant = React.useContext(DefaultAndBottomVariantContext);
  const {isSoftOrOutlinedContext} = React.useContext(SoftAndOutlinedVariantContext);

  if (isSoftOrOutlinedContext) {
    console.warn(`TabsIndicator: indicator prop is not used in ${variant} variant, remove it`);
    return null;
  }

  if (variant === "bottomIndicator" && indicator) {
    console.warn(`TabsIndicator: indicator prop is not used in ${variant} variant, remove it`);
  }

  indicator = indicator || "outlined";
  const classNames = variant === "default"
    ? theme[variant].indicator[indicator as Indicator]
    : theme[variant as DefaultAndBottomVariant].indicator;

  return (
    <span
      {...props}
      aria-hidden={true}
      ref={forwardedRef}
      className={cn(classNames, className)}
    />
  );
});

const TabsContent = TabsPrimitive.Content;

type TabsTriggerIconProps = {
  className?: string,
  children: React.ReactNode
}

const TabsTriggerIcon = ({className, children}: TabsTriggerIconProps) => {
  const defaultOrBottomVariantContext = React.useContext(DefaultAndBottomVariantContext);
  const {
    variant: softOrOutlinedVariantContext,
    isSoftOrOutlinedContext,
    size
  } = React.useContext(SoftAndOutlinedVariantContext);

  let classNames;

  if (isSoftOrOutlinedContext) {
    classNames = theme[softOrOutlinedVariantContext as SoftAndOutlinedVariant].triggerIcon[size as Size];
  } else {
    classNames = theme[defaultOrBottomVariantContext].triggerIcon;
  }

  return cloneElement(
    children as React.ReactElement,
    cn(classNames, className)
  );
}

const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
  TriggerIcon: TabsTriggerIcon
}

export default Tabs;

export {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
  TabsTriggerIcon
}