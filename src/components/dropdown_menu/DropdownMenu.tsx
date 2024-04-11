import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import { cloneElement } from "../../lib/utils.ts";
import {
  menu,
  menuSeparator as separator,
  defaultMenuProps,
  type MenuProps,
  type MenuSeparatorProps as SeparatorProps,
} from "@tailus/themer"

const DropdownMenuRoot = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuLabel = DropdownMenuPrimitive.Label;
const DropdownMenuCheckboxItem = DropdownMenuPrimitive.CheckboxItem;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuRadioItem = DropdownMenuPrimitive.RadioItem;
const DropdownMenuItemIndicator = DropdownMenuPrimitive.ItemIndicator;

const MenuContext = React.createContext(defaultMenuProps);

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & MenuProps
  >(({ className, variant, intent, mixed, fancy, ...props }, forwardedRef) => {

  const {
    variant: contextVariant,
    intent: contextIntent,
    mixed: contextMixed,
    fancy: contextFancy,
  } = React.useContext(MenuContext);

  variant = variant || contextVariant || "soft";
  intent = intent || contextIntent;
  fancy = fancy || contextFancy;
  mixed = mixed || contextMixed;
    
  if (fancy && mixed) {
    throw new Error('The fancy and mixed props cannot be used together.');
  }

  const contextValues = { variant, intent, fancy, mixed };
  const { content } = menu[variant]();

  return (
    <MenuContext.Provider value={contextValues}>
      <DropdownMenuPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={content({mixed, fancy, intent, className})}
      />
    </MenuContext.Provider>
  );
});

const DropdownMenuArrow = DropdownMenuPrimitive.Arrow;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & MenuProps
  >(({ className, variant, intent, ...props }, forwardedRef) => {
  
  const contextValues = React.useContext(MenuContext);
    
  variant = variant || contextValues.variant || "soft";
  intent = intent || contextValues.intent;
    
  const { item } = menu[variant]({intent})
    
  return (
    <DropdownMenuPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={item({intent, className})}
    />
  );
});

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & SeparatorProps
  >(({ className, fancy, ...props }, forwardedRef) => {

    const {fancy: contextVariant} = React.useContext(MenuContext);
    fancy = fancy || contextVariant;
    
  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      ref={forwardedRef}
      className={separator({fancy, className})}
    />
  );
});

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & MenuProps
  >(({ className, variant, intent, ...props }, forwardedRef) => {
  
  const contextValues = React.useContext(MenuContext);
  variant = variant || contextValues.variant || "soft";
  intent = intent || contextValues.intent;
  
  const { subTrigger } = menu[variant]({})

  return (
    <DropdownMenuPrimitive.SubTrigger
      {...props}
      ref={forwardedRef}
      className={subTrigger({intent, className})}
    />
  );
});

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & MenuProps
  >(({ className, variant, intent, fancy, mixed, ...props }, forwardedRef) => {

  const {
    variant: contextVariant,
    intent: contextIntent,
    fancy: contextFancy,
    mixed: contextMixed,
  } = React.useContext(MenuContext);
  
  variant = variant || contextVariant || "soft";
  intent = intent || contextIntent;
  fancy = fancy || contextFancy;
  mixed = mixed || contextMixed;
  const { content } = menu[variant]({ intent });
  
  if (fancy && mixed) {
    throw new Error('The fancy and mixed props cannot be used together.');
  }

  return (
    <DropdownMenuPrimitive.SubContent
      {...props}
      ref={forwardedRef}
      className={content({ mixed, fancy, intent, className })}
    />
  );
});

interface DropdownMenuIconProps extends MenuProps {
  className?: string,
  children?: React.ReactNode,
}

const DropdownMenuIcon = ({className, children}: DropdownMenuIconProps) => {
  const {icon} = menu.soft({})
  return cloneElement(
    children as React.ReactElement,
    icon({className})
  );
}

const DropdownMenuRightIcon = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & MenuProps
>(({className, ...props}, forwardedRef) => {
  const {icon} = menu.solid({})
  return (
    <div
      {...props}
      ref={forwardedRef}
      className={icon({className})}
    />
  );
});

export default {
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