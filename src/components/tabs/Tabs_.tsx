import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  tabs as defaultTheme,
  softTabs as softTheme,
  outlinedTabs as outlinedTheme,
  bottomIndicatorTabs as bottomIndicatorTheme,
} from "@tailus/themer-tabs";
import React from "react";

type TabsVariant = "default" | "soft" | "outlined" | "bottomIndicator";

const tabsThemes = {
  default: defaultTheme,
  soft: softTheme,
  outlined: outlinedTheme,
  bottomIndicator: bottomIndicatorTheme,
};

interface TabsRootProps {
  variant?: TabsVariant;
}

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentProps<typeof TabsPrimitive.Root> & TabsRootProps
>((props, forwardedRef) => {
  return (
    <TabsPrimitive.Root
      {...props}
      ref={forwardedRef}
    />
  )
});

const Tabs = {
  Root: TabsRoot,
}

export default Tabs;

export {
  TabsRoot,
}