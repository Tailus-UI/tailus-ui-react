//import {dropdownMenu as defaultTheme, softDropdownMenu as softTheme} from "@tailus/themer-dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

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