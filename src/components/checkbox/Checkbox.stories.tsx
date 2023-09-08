import CheckboxUI from "./Checkbox";
import CheckboxRingVariant from "./Ring";

export default {
    component: CheckboxUI
}

export const Checkbox = () => <CheckboxUI />;
export const WithRing = () => <CheckboxRingVariant />;