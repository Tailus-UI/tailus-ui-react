import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import {
  tabs,
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps
} from "@tailus/themer";

const {list, trigger, indicator} = tabs();

const TabsContext = React.createContext<Omit<ListProps, "variant">>({
  intent: "primary",
  size: "md",
  triggerVariant: "plain"
});

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & ListProps
  >(({ className, variant="bottomOutlined", triggerVariant="plain", intent="primary", size="md", ...props }, forwardedRef) => {

  variant = variant || "soft";
    
  return (
    <TabsContext.Provider value={{triggerVariant, intent, size}}>
        <TabsPrimitive.List
          {...props}
          ref={forwardedRef}
          className={list({listVariant:variant, size, triggerVariant, className})}
        />
    </TabsContext.Provider>
  )
});

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentProps<typeof TabsPrimitive.Trigger>
>(({className, ...props}, forwardedRef) => {

  const { triggerVariant, size, intent } = React.useContext(TabsContext);
  
  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={trigger({triggerVariant, size, intent, className})}
    />
  )
});

const TabsIndicator = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentProps<"span"> & Pick<IndicatorProps, "variant">
  >(({ className, variant = "bottom", ...props }, forwardedRef) => {
  
  const { intent } = React.useContext(TabsContext);
    
  return (
    <span
      {...props}
      aria-hidden
      ref={forwardedRef}
      className={indicator({indicatorVariant:variant, intent, className})}
    />
  );
});

const TabsContent = TabsPrimitive.Content;

export default {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
}

export {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
}