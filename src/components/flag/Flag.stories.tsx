import FlagUI from "./Flag";
import FlagWithMessage from "./WithMessage";

export default {
    component: FlagUI,
    tags: ['autodocs'],
}

export const Flag = () => <FlagUI />;
export const WithMessage = () => <FlagWithMessage />;