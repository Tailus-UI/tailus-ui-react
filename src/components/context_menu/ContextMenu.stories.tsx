import ContextMenuUI from "./ContextMenu";
import SoftContextMenu from "./SoftContextMenu";

export default {
    component: ContextMenuUI,
}

export const ContextMenu = () => <ContextMenuUI />;
export const Soft = () => <SoftContextMenu />;