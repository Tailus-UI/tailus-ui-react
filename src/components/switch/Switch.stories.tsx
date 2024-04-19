import {SwitchRoot, SwitchThumb} from "./Switch.tsx";
import { Meta, StoryObj } from "@storybook/react";
import { type SwitchVariantsProps } from "./Switch.tsx";
import Label from "../label/Label.tsx";
import { Caption } from "../typography/Caption.tsx";
interface SwitchProps extends SwitchVariantsProps {
    disabled?: boolean;
}
const SwitchUI = (args:SwitchProps) => (
    <form>
        <div className="max-w-md space-y-1">
            <div className="flex items-center justify-between">
                <Label htmlFor="airplane-mode">
                    Airplane mode
                </Label>
                <SwitchRoot className="mt-1" id="airplane-mode" fancy={args.fancy} intent={args.intent} disabled={args.disabled}>
                    <SwitchThumb />
                </SwitchRoot>
            </div>
            <Caption as="p" size="base">Switch components are used to allow users to toggle between two states, such as on and off.</Caption>
        </div>
    </form>
);

const meta: Meta<typeof SwitchUI> = {
    title: 'Switch',
    component: SwitchUI,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'The switch component theme is a collection of Tailwindcss utilities that can be used to' +
                  ' create switch components with different colors and styles. Switch components are used to allow ' +
                  'users to toggle between two states, such as on and off.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        intent: {
            control: 'select',
            description: 'The intent of the switch',
            options : ["primary", "gray", "neutral"],
        },
        fancy: {
            control: 'boolean',
            description: 'Fancy stye of the switch',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state of the switch',
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Switch: Story = {
};