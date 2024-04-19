import {Meta, StoryObj} from "@storybook/react";
import Slider from "./Slider";
import { type SliderProps } from "@tailus/themer";

const SliderUI = (args:SliderProps & {thumbSize: "sm" | "md" | "lg"}) => (
  <form>
      <Slider.Root className="w-96" size={args.size} intent={args.intent} defaultValue={[50]} data-orientation="vertical" max={100} step={1}>
          <Slider.Track>
              <Slider.Range />
          </Slider.Track>
          <Slider.Thumb variant={args.variant} size={args.thumbSize} aria-label="Volume" />
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
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        thumbSize: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["solid", "raised", "outlined", "fancy"],
        },
        intent: {
            control: "select",
            options: ["primary", "secondary", "accent", "gray", "neutral"],
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
    name: 'Slider',
    args: {
        size: "md",
        variant: "raised",
        intent: "primary",
    },
    render : SliderUI
};
