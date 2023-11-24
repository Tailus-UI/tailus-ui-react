import {Meta, StoryObj} from "@storybook/react";
import Slider from "./Slider";

const SliderUI = () => (
  <form>
      <Slider.Root defaultValue={[50]} data-orientation="vertical" max={100} step={1}>
          <Slider.Track>
              <Slider.Range />
          </Slider.Track>
          <Slider.Thumb aria-label="Volume" />
      </Slider.Root>
  </form>
);

const meta: Meta<typeof SliderUI> = {
    title: 'Slider',
    component: SliderUI,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'The slider component theme is a collection of Tailwindcss utilities that can be used ' +
                  'to create slider components with different colors and styles. Slider components are used to allow' +
                  ' users to select a value from a range of values.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
};
