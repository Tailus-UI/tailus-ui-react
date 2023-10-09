import AvatarUI from "./Avatar";
import AvatarSoftFallback from "./SoftFallback";
import AvatarTopStatus from "./TopStatus";
import AvatarBottomStatus from "./BottomStatus";

export default {
    component: AvatarUI,
}

console.log(AvatarUI);

export const Avatar = () => <AvatarUI />;
export const SoftFallback = () => <AvatarSoftFallback />;
export const TopStatus = () => <AvatarTopStatus />;
export const BottomStatus = () => <AvatarBottomStatus />;