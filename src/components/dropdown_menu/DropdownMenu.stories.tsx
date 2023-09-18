import DropdownMenuUI from "./DropdownMenu";
import SoftDropdownMenuUI from "./SoftDropdownMenu";

export default {
    component: DropdownMenuUI,
    tags: ['autodocs'],
}

export const DropdownMenu = () => <DropdownMenuUI />;
export const Soft = () => <SoftDropdownMenuUI />;