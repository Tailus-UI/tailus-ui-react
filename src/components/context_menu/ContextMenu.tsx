import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import {contextMenu as defaultTheme, softContextMenu as softTheme} from "@tailus/themer-context-menu"
import React from "react";
import {cn} from "../../lib/utils.ts";

type MenuContextValue = {
  variant: "default" | "soft";
  intent: "primary" | "warning" | "danger" | "gray";
}

const defaultMenuContextValue: MenuContextValue = {
  variant: "default",
  intent: "primary",
}

const MenuContext = React.createContext(defaultMenuContextValue);

const ContextMenuRoot = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuLabel = ContextMenuPrimitive.Label;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuCheckboxItem = ContextMenuPrimitive.CheckboxItem;
const ContextMenuItemIndicator = ContextMenuPrimitive.ItemIndicator;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuRadioItem = ContextMenuPrimitive.RadioItem;
const ContextMenuSub = ContextMenuPrimitive.Sub;

export interface ContextMenuContentProps {
  variant?: "default" | "soft";
  intent?: "primary" | "warning" | "danger" | "gray";
}

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & ContextMenuContentProps
>(({className, variant, intent, ...props}, forwardedRef) => {
  const contextValues = {
    variant: variant || defaultMenuContextValue.variant,
    intent: intent || defaultMenuContextValue.intent
  }
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <MenuContext.Provider value={contextValues}>
      <ContextMenuPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={cn(theme.content, className)}
      />
    </MenuContext.Provider>
  );
});

export interface ContextMenuItemProps {
  variant?: "default" | "soft";
  intent?: "primary" | "warning" | "danger" | "gray";
}

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & ContextMenuItemProps
>((
  {
    className,
    intent,
    variant,
    ...props
  }, forwardedRef
) => {
  const {
    variant: contextVariant,
    intent: contextIntent
  } = React.useContext(MenuContext);

  variant = variant || contextVariant;
  intent = intent || contextIntent;

  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <ContextMenuPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={cn(theme.item[intent], className)}
    />
  );
});

interface ContextMenuSubTriggerProps extends ContextMenuItemProps {
}

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & ContextMenuSubTriggerProps
>((
  {
    className,
    intent = "primary",
    variant,
    ...props
  }, forwardedRef
) => {
  const {
    variant: contextVariant,
    intent: contextIntent
  } = React.useContext(MenuContext);

  variant = variant || contextVariant;
  intent = intent || contextIntent;

  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <ContextMenuPrimitive.SubTrigger
      {...props}
      ref={forwardedRef}
      className={cn(theme.subTriger[intent], className)}
    />
  );
});

interface ContextMenuSubContentProps extends ContextMenuContentProps {
}

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> & ContextMenuSubContentProps
>((
  {
    className,
    variant,
    ...props
  }, forwardedRef
) => {
  const {variant: contextVariant} = React.useContext(MenuContext);
  variant = variant || contextVariant;
  const theme = variant === "default" ? defaultTheme : softTheme;
  return (
    <ContextMenuPrimitive.SubContent
      {...props}
      ref={forwardedRef}
      className={cn(theme.subContent, className)}
    />
  );
});

interface ContextMenuSeparatorProps extends ContextMenuContentProps {
}

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> & ContextMenuSeparatorProps
>(({className, variant, ...props}, forwardedRef) => {
  const {variant: contextVariant} = React.useContext(MenuContext);
  variant = variant || contextVariant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <ContextMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={cn(theme.separator, className)}
    />
  );
});

interface ContextMenuCommandProps {
  variant?: "default" | "soft";
}

const ContextMenuCommand = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & ContextMenuCommandProps
>(({className, variant, ...props}, forwardedRef) => {
  const {variant: contextVariant} = React.useContext(MenuContext);
  variant = variant || contextVariant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(theme.command, className)}
    />
  );
});

interface ContextMenuIconProps extends ContextMenuCommandProps {
}

const ContextMenuIcon = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & ContextMenuIconProps
>(({className, variant, ...props}, forwardedRef) => {
  const {variant: contextVariant} = React.useContext(MenuContext);
  variant = variant || contextVariant;
  const theme = variant === "default" ? defaultTheme : softTheme;

  return (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(theme.icon, className)}
    />
  );
});

const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Content: ContextMenuContent,
  Label: ContextMenuLabel,
  Item: ContextMenuItem,
  Group: ContextMenuGroup,
  CheckboxItem: ContextMenuCheckboxItem,
  ItemIndicator: ContextMenuItemIndicator,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent,
  Separator: ContextMenuSeparator,
  Command: ContextMenuCommand,
  Icon: ContextMenuIcon,
}

export {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuGroup,
  ContextMenuCheckboxItem,
  ContextMenuItemIndicator,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuSeparator,
  ContextMenuCommand,
  ContextMenuIcon,
}

export default ContextMenu;