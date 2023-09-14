import RadioGroupUI from "./RadioGroup";
import RadioGroupShadowVariant from "./ShadowRadio";

export default {
    component: RadioGroupUI,
    tags: ['autodocs'],
}

export const RadioGroup = () => <RadioGroupUI />;
export const Shadow = () => <RadioGroupShadowVariant />