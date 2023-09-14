import CardUI from "./Card";
import CardElevatedVariant from "./Elevated";
import CardMixedVariant from "./Mixed";
import CardSoftVariant from "./Soft";
import CardGradientBordersVariant from "./GradientBorders";

export default {
    component: CardUI,
    tags: ['autodocs'],
}

export const Card = () => <CardUI />;
export const Elevated = () => <CardElevatedVariant />
export const Mixed = () => <CardMixedVariant />
export const Soft = () => <CardSoftVariant />
export const GradientBorders = () => <CardGradientBordersVariant />