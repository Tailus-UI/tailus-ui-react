import {SwitchContainer, SwitchLabel, SwitchRoot, SwitchThumb} from "./Switch.tsx";
import {Meta, StoryObj} from "@storybook/react";

const SwitchUI = () => (
  <form>
      <SwitchContainer>
          <SwitchRoot id="airplane-mode">
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Switch: Story = {
};