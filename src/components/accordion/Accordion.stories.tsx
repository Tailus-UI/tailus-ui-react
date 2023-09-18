import AccordionUI from "./Accordion";
import AccordionOutlinedVariant from "./Outlined";
import AccordionSoftVariant from "./Soft";
import AccordionElevatedVariant from "./Elevated";
import AccordionOutlinedElevatedVariant from "./OutlinedElevated";
import AccordionGhostVariant from "./Ghost";

export default {
  component: AccordionUI,
};

export const Accordion = () => <AccordionUI />;
export const Outlined = () => <AccordionOutlinedVariant />;
export const Soft = () => <AccordionSoftVariant />;
export const Elevated = () => <AccordionElevatedVariant />;
export const OutlinedElevated = () => <AccordionOutlinedElevatedVariant />;
export const Ghost = () => <AccordionGhostVariant />;
