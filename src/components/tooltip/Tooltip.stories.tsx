import TooltipUI from "./Tooltip";
import TooltipArrow from "./WithArrow";

export default {
    component : TooltipUI,
}

export const Tooltip = () => <TooltipUI />;
export const WithArrow = () => <TooltipArrow />;