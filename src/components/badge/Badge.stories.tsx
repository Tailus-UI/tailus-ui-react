import BadgeUI from "./Badge";
import BadgeOutlinedVariant from "./Outlined";
import BadgeSoftVariant from "./Soft";

export default {
    component: BadgeUI,
    tags: ['autodocs'],
}

export const Badge = () => <BadgeUI />;
export const Soft = () => <BadgeSoftVariant />;
export const Outlined = () => <BadgeOutlinedVariant />;