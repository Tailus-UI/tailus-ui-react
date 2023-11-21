import {dropdownMenu as defaultTheme, softDropdownMenu as softTheme} from "@tailus/themer-dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";

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



const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
};

export default DropdownMenu;

export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
}

export type {
  Variant,
  Intent,
}