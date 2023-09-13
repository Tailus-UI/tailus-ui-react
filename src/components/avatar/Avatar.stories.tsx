import AvatarUI from "./Avatar";
import AvatarSolidFallback from "./SolidFallback";
import AvatarTopStatus from "./TopStatus";
import AvatarBottomStatus from "./BottomStatus";

export default {
    component: AvatarUI,
    tags: ['autodocs'],
}

export const Avatar = () => <AvatarUI />;
export const SolidFallback = () => <AvatarSolidFallback />;
export const TopStatus = () => <AvatarTopStatus />;
export const BottomStatus = () => <AvatarBottomStatus />;