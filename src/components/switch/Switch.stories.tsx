import {SwitchContainer, SwitchLabel, SwitchRoot, SwitchThumb} from "./Switch.tsx";
import {Meta, StoryObj} from "@storybook/react";
interface SwitchProps {
  fancy?: boolean;
    intent?: 'primary' | 'gray' | 'neutral';
    disabled?: boolean;
}
const SwitchUI = (args:SwitchProps) => (
  <form>
      <SwitchContainer>
          <SwitchRoot id="airplane-mode" fancy={args.fancy} intent={args.intent} disabled={args.disabled}>
              <SwitchThumb />
          </SwitchRoot>
          <SwitchLabel htmlFor="airplane-mode">
              Airplane mode
          </SwitchLabel>
      </SwitchContainer>
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