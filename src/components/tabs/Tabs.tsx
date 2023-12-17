import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  tabs as defaultTheme,
  softTabs as softTheme,
  outlinedTabs as outlinedTheme,
  bottomIndicatorTabs as bottomIndicatorTheme,
} from "@tailus/themer-tabs";
import React from "react";
import {cn} from "../../lib/utils.ts";

type TabsVariant = "default" | "soft" | "outlined" | "bottomIndicator";
type SoftAndOutlinedVariant = "soft" | "outlined";
type DefaultAndBottomVariant = "default" | "bottomIndicator";
type Intent = "primary" | "secondary" | "accent" | "gray" | "neutral";
type Indicator = "elevated" | "outlined";

const DefaultAndBottomVariantContext = React.createContext<DefaultAndBottomVariant>("default");

const SoftAndOutlinedVariantContext = React.createContext({
  variant: "outlined",
  intent: "primary",
  isSoftOrOutlinedContext: false,
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

/**
* `TabsRoot` is a component that behaves as the root for a group of tab-related components.
* It utilises the `forwardRef` function from React for accessing the ref.
* The function receives an object as parameter that includes possible `props`, their `intent` and `variant`.
*
* The Type for variant is `TabsVariant` which can be "default", "soft", "outlined", "bottomIndicator",
* while Intent can be "primary", "secondary", "accent", "gray", "neutral".
*
* Depending on the `variant`, 'soft' or 'outlined', it returns the 'TabsPrimitive.Root' wrapped
* in 'SoftAndOutlinedVariantContext.Provider'. This Provider holds the variant, intent (defaulting to 'primary')
* and a boolean flag 'isSoftOrOutlinedContext' which is set to true in this case.
*
* If the `intent` is defined and `variant` is not 'soft' or 'outlined', it throws an error stating that `intent`
* prop is not used and should be removed. In other cases, the function returns 'TabsPrimitive.Root' wrapped in
* 'DefaultAndBottomVariantContext.Provider' which holds the variant.
*
* 'TabsPrimitive.Root' takes all the remaining `props` and `forwardedRef`.
*/
const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & TabsRootProps
>(({variant = "default", intent, ...props}, forwardedRef) => {
  if (variant === "soft" || variant === "outlined") {
    return (
      <SoftAndOutlinedVariantContext.Provider
        value={{variant: variant, intent: intent || "primary", isSoftOrOutlinedContext: true}}
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
  variant?: "soft" | "outlined",
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl",
};

/**
 * `TabsList` is a component that creates a list of tabs, and forwards a ref to its parent component.
 * It receives props `className`, `variant`, and `size` along with other properties, and forwards them.
 *
 * The type for `variant` can be either "soft" or "outlined", and the allowable values for `size` can
 * range from "xs" to "xxxl".
 *
 * The component retrieves the `DefaultAndBottomVariantContext` and `SoftAndOutlinedVariantContext`
 * from the React Context API. Depending on whether it's a soft or outlined context, the context
 * variant is set accordingly.
 *
 * Once the context variant is determined, the component ensures that the `size` prop is not used
 * when the variant is either "default" or "bottomIndicator", and the `variant` prop is not used
 * when the variant is "soft" or "outlined". Once these checks are done, it assigns the appropriate
 * class name for the List component.
 *
 * The `List` component from `TabsPrimitive` is then returned, spreading out the remaining props,
 * using the `forwardedRef` and `className` to render it.
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & TabsListProps
>(({className, variant, size, ...props}, forwardedRef) => {
  let contextVariant;

  const {
    isSoftOrOutlinedContext,
    variant: softAndOutlinedVariantContext,
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
    classNames = theme[contextVariant].list[size || "lg"];
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

/**
* `TabsTrigger` is a UI component that represents a tab trigger within a tab menu structure and forwards a ref to its parent component.
* It may receive properties such as `className` and `intent` along with other properties and forward them.
*
* The Intent can be "primary", "secondary", "accent", "gray" or "neutral".
*
* TabsTrigger utilizes Context API to fetch contexts from defaultAndBottomVariantContext and softAndOutlinedVariantContext.
*
* Depending on the context type, if it is 'SoftOrOutlined', it fetches the relevant theme from theme object depending on the
* variant and intent context. If intent is passed through props it is used otherwise intentContext is used.
*
* If the context type is not 'SoftOrOutlined', it verifies that `intent` prop is not used and throws an error if it is used.
* It then fetches the theme for the given contextVariant from the theme object.
*
* The function then returns TabsPrimitive.Trigger component with all remaining properties (props), the forwarded ref and the computed class name.
*/
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

/**
 * `TabsIndicator` is a UI component wrapped in a forwardRef React function, meant to create an indicator for the tabs.
 * The type of `TabsIndicator` consists of `React.ElementRef<"span">` and the combination of properties of a `span` HTML
 * element with `TabsIndicatorProps`.
 *
 * Its props include `className` and `indicator`, apart from other potential props. The props and a `forwardedRef` are the arguments
 * of the function. Inside the function, it uses the React Context API to retrieve `variant` from `DefaultAndBottomVariantContext`
 * and `isSoftOrOutlinedContext` from `SoftAndOutlinedVariantContext`.
 *
 * Depending on the context type, it verifies conditions for `variant` and if `indicator` prop is used. If the `isSoftOrOutlinedContext`
 * is true, a console warning is generated and the function returns null. If `variant` is "bottomIndicator" and `indicator` is
 * truthy, a warning is shown as well.
 *
 * It sets the default `indicator` value to "outlined" if it's otherwise falsy. The classNames are built based on `variant`
 * and `indicator`. Finally, the function returns a `span` element with props spread over it, `aria-hidden` set to true, `ref`
 * to the `forwardedRef`, and `className` as an evaluated class name.
 */
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

const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
}

export default Tabs;

export {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
}