import ContextMenuUI from "./ContextMenu";
import SoftContextMenu from "./SoftContextMenu";

export default {
    component: ContextMenuUI,
    tags: ['autodocs'],
}

export const ContextMenu = () => <ContextMenuUI />;
export const Soft = () => <SoftContextMenu />;