import CardUI from "./Card";
import CardElevatedVariant from "./Elevated";

export default {
    component: CardUI,
    tags: ['autodocs'],
}

export const Card = () => <CardUI />;
export const Elevated = () => <CardElevatedVariant />