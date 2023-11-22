import {dropdownMenu as defaultTheme, softDropdownMenu as softTheme} from "@tailus/themer-dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import {cn} from "../../lib/utils.ts";

type Variant = "default" | "soft";
type Intent = "primary" | "warning" | "danger" | "gray" | "neutral";

interface MenuContextValue {
  variant: Variant;
  intent: Intent;
}

const defaultMenuContextValues: MenuContextValue = {
  variant: "default",
  intent: "primary",
}

const MenuContext = React.createContext(defaultMenuContextValues);

const DropdownMenuRoot = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

interface DropdownMenuContentProps {
  variant?: Variant,
}

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & DropdownMenuContentProps
>(({className, variant, ...props}, forwardedRef) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <MenuContext.Provider value={contextValues}>
      <DropdownMenuPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={cn(theme.content, className)}
      />
    </MenuContext.Provider>
  );
});

const DropdownMenuArrow = DropdownMenuPrimitive.Arrow;

interface DropdownMenuItemProps {
  variant?: Variant,
  intent?: Intent,
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & DropdownMenuItemProps
>(({className, variant, intent, ...props}, forwardedRef) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  intent = intent || contextValues.intent;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <DropdownMenuPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={cn(theme.item[intent], className)}
    />
  );
});

const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Content: DropdownMenuContent,
  Arrow: DropdownMenuArrow,
  Item: DropdownMenuItem,
};

export default DropdownMenu;

export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuArrow,
  DropdownMenuItem,
}

export type {
  Variant,
  Intent,
}