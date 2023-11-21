//import {dropdownMenu as defaultTheme, softDropdownMenu as softTheme} from "@tailus/themer-dropdown-menu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const DropdownMenuRoot = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
};

export default DropdownMenu;

export {
  DropdownMenuRoot,
  DropdownMenuTrigger,
}