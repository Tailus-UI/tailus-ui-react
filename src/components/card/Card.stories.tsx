import CardUI from "./Card";
import CardElevatedVariant from "./Elevated";
import CardMixedVariant from "./Mixed";

export default {
    component: CardUI,
    tags: ['autodocs'],
}

export const Card = () => <CardUI />;
export const Elevated = () => <CardElevatedVariant />
export const Mixed = () => <CardMixedVariant />