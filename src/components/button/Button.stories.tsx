import ButtonUI from "./Button";
import IconButton from "./IconButton";
import LeadingIconButton from "./LeadingIconButton";
import TrailingIconButton from "./TrailingIconButton";

import OutlinedButton from "./outlined-variant/Button";
import OutlinedIconButton from "./outlined-variant/IconButton";
import OutlinedLeadingIconButton from "./outlined-variant/LeadingIconButton";
import OutlinedTrailingIconButton from "./outlined-variant/TrailingIconButton";

export default {
    component: ButtonUI,
    tags: ['autodocs'],
}

export const Button = () => <ButtonUI />;
export const Icon = () => <IconButton />
export const LeadingIcon = () => <LeadingIconButton />
export const TrailingIcon = () => <TrailingIconButton />

export const Outlined = () => <OutlinedButton />;
export const OutlinedIcon = () => <OutlinedIconButton />
export const OutlinedLeadingIcon = () => <OutlinedLeadingIconButton />
export const OutlinedTrailingIcon = () => <OutlinedTrailingIconButton />