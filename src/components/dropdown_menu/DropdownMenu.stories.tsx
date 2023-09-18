import DropdownMenuUI from "./DropdownMenu";
import SoftDropdownMenuUI from "./SoftDropdownMenu";
import DropdownMenuSubMenu from "./SolidWithSubMenu";

export default {
    component: DropdownMenuUI,
    tags: ['autodocs'],
}

export const DropdownMenu = () => <DropdownMenuUI />;
export const Soft = () => <SoftDropdownMenuUI />;
export const WithSubMenu = () => <DropdownMenuSubMenu />;