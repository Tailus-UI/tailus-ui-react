import { Calendar, CalendarProps } from "./Calendar";
import type { Meta } from '@storybook/react';
import { Card } from "../card/Card";
import { arSA } from 'date-fns/locale';

const selectedDates = Array.from({ length: 12 }, (_, i) => {
  const date = new Date();
  date.setMonth(i);
  date.setDate(Math.floor(Math.random() * 28) + 1);
  return date;
});


const meta: Meta<CalendarProps> = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable calendar component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    intent: { 
      control: 'select', 
      options: ["primary", "secondary", "accent", "neutral",] 
    },
      disabled: { control: 'boolean' },
  }
};

export default meta;

export const Example = (args:CalendarProps) => (
  <Card fancy>
    <Calendar {...args} />
  </Card>
);

export const SelectedDates = (args:CalendarProps) => (
    <Card fancy>
        <Calendar
            {...args}
            selected={selectedDates}
            fromYear={2024}
            toYear={2024}
        />
  </Card>
);

export const HandDrawnSelectedDates = (args:CalendarProps) => (
    <Card fancy>
        <Calendar
            {...args}
            selected={selectedDates}
            fromYear={2024}
            toYear={2024}
            handDrawn
            intent={args.intent ||  "primary" }
        />
  </Card>
);

export const RTL = (args:CalendarProps) => (
  <Card fancy>
    <Calendar {...args} locale={arSA} dir="rtl" />
  </Card>
);