import CardUI from "./Card";
import CardElevatedVariant from "./Elevated";
import CardMixedVariant from "./Mixed";
import CardSoftVariant from "./Soft";
import CardSoftGradientVariant from "./SoftGradient";
import CardElevatedGradientVariant from "./ElevatedGradient";

export default {
  component: CardUI,
  tags : ["tailwind", "card", "autodocs"],
}

export const Card = () => <CardUI />;
export const Elevated = () => <CardElevatedVariant />
export const Mixed = () => <CardMixedVariant />
export const Soft = () => <CardSoftVariant />
export const SoftGradient = () => <CardSoftGradientVariant />
export const ElevatedGradient = () => <CardElevatedGradientVariant />