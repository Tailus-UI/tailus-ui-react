/*import DropdownMenuUI from "./DropdownMenu";
import SoftDropdownMenuUI from "./SoftDropdownMenu";
import DropdownMenuSubMenu from "./SolidWithSubMenu";
import SoftDropdownSubMenu from "./SoftWithSubMenu";

export default {
    component: DropdownMenuUI,
}

export const DropdownMenu = () => <DropdownMenuUI />;
export const Soft = () => <SoftDropdownMenuUI />;
export const WithSubMenu = () => <DropdownMenuSubMenu />;
export const SoftWithSubMenu = () => <SoftDropdownSubMenu />;*/

import DropdownMenu from "./DropdownMenu2.tsx";
import {Meta, StoryObj} from "@storybook/react";

type DropdownMenuUIProps = {
    variant?: "default" | "soft",
}

const DropdownMenuUI = (args: DropdownMenuUIProps) => {
    return (
      <DropdownMenu.Root>

      </DropdownMenu.Root>
    );
}

const meta: Meta<typeof DropdownMenuUI> = {
    title: "DropdownMenu",
    component: DropdownMenuUI,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "The dropdown menu component theme is a collection of Tailwind utilities that can be " +
                  "used to create dropdown menus with different variants and colors. The default variant is " +
                  "solid, but there is also a soft variant. Each variant has a number of properties that can " +
                  "be customized, including the shadow, border colors, background opacity, backdrop blur, " +
                  "radius, and separator colors."
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            name: "Variant",
            control: "radio",
            description: "The variant of the dropdown menu content.",
            defaultValue: "default",
            options: ["default", "soft"],
        },
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
    args: {
        variant: "default",
    }
}