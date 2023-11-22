import {dropdownMenu as defaultTheme, softDropdownMenu as softTheme} from "@tailus/themer-dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import {cloneElement, cn} from "../../lib/utils.ts";

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
  intent?: Intent,
}

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & DropdownMenuContentProps
>(({className, variant, intent, ...props}, forwardedRef) => {
  variant = variant || defaultMenuContextValues.variant;
  intent = intent || defaultMenuContextValues.intent;
  const contextValues = {variant: variant, intent: intent}
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

const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuLabel = DropdownMenuPrimitive.Label;
const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem;
const DropdownMenuItemIndicator = DropdownMenuPrimitive.ItemIndicator;

interface DropdownMenuSeparatorProps extends DropdownMenuContentProps {
}

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & DropdownMenuSeparatorProps
>(({className, variant, ...props}, forwardedRef) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={cn(theme.separator, className)}
    />
  );
});

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

interface DropdownMenuSubTriggerProps extends DropdownMenuItemProps {
}

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & DropdownMenuSubTriggerProps
>(({className, variant, intent, ...props}, forwardedRef) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  intent = intent || contextValues.intent;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <DropdownMenuPrimitive.SubTrigger
      {...props}
      ref={forwardedRef}
      className={cn(theme.subTriger[intent], className)}
    />
  );
});

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & DropdownMenuContentProps
>(({className, variant, intent, ...props}, forwardedRef) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  intent = intent || contextValues.intent;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <MenuContext.Provider value={{variant: variant, intent: intent}}>
      <DropdownMenuPrimitive.SubContent
        {...props}
        ref={forwardedRef}
        className={cn(theme.subContent, className)}
      />
    </MenuContext.Provider>
  );
});

interface DropdownMenuIconProps extends DropdownMenuContentProps {
  className?: string,
  children?: React.ReactNode,
}

const DropdownMenuIcon = ({className, children, variant}: DropdownMenuIconProps) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return cloneElement(
    children as React.ReactElement,
    cn(theme.icon, className)
  );
}

const DropdownMenuRightIcon = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { variant?: Variant }
>(({className, variant, ...props}, forwardedRef) => {
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(theme.rightIcon, className)}
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
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  ItemIndicator: DropdownMenuItemIndicator,
  Separator: DropdownMenuSeparator,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Icon: DropdownMenuIcon,
  RightIcon: DropdownMenuRightIcon,
};

export default DropdownMenu;

export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuArrow,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuIcon,
  DropdownMenuRightIcon,
}

export type {
  Variant,
  Intent,
}