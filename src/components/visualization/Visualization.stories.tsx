import { faker } from '@faker-js/faker';
import { ResponsiveContainer } from 'recharts';
import Tooltip from './Tooltip';
import Axis from './Axis';
import CartesianGrid from './CartesianGrid';
import {Area, AreaChart} from "./Area"
import { type VTooltipProps as TooltipProps } from "@tailus/themer";
import type { Meta, StoryObj } from '@storybook/react';

const data = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map(month => ({
  name: month,
  'Spends': faker.number.int({ min: 0, max: 200000 }),
  Savings: faker.number.int({ min: 0, max: 200000 }),
}));

const Chart = (args:TooltipProps) => {
    return (
        <div className="h-72 max-w-2xl min-w-[42rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorOld" x1="0" y1="0" x2="0" y2="1">
                            <stop className="text-accent-200 dark:text-accent-600/50" offset="5%" stopColor="currentColor" stopOpacity={0.8} />
                            <stop className="text-white dark:text-gray-950" offset="95%" stopColor="currentColor" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                            <stop className="text-primary-200 dark:text-primary-600/50" offset="5%" stopColor="currentColor" stopOpacity={0.8} />
                            <stop className="text-white dark:text-gray-950" offset="95%" stopColor="currentColor" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Axis.Y />
                    <Axis.X/>
                    <Tooltip.Root content={
                        <Tooltip.Custom
                            fancy={args.fancy}
                            mixed={args.mixed}
                            active={false}
                            payload={[]}
                            label={""}
                        />
                    } />
                    <CartesianGrid horizontal={false} />
                    <Area intent="accent" dataKey="Savings" />
                    <Area intent="primary" dataKey="Spends" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}


const meta:Meta<typeof Chart> = {
    title: 'Components / Visualisation / Tooltip',
    component: Chart,
    parameters: {
        docs: {
        description: {
            component: 'Code component for displaying inline code.',
        },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        fancy: {
            control: "boolean"
        },
        mixed: {
            control: "boolean"
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TooltipExample: Story = {
    name: 'Tooltip',
    args: {
        fancy: false,
        mixed: true  
    },
    render : Chart
};