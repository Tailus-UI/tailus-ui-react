import { faker } from '@faker-js/faker';
import { Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Tooltip as CustomTooltip } from './Tooltip';
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
                    <YAxis
                        stroke="currentColor"
                        className="text-gray-500"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        dataKey="name"
                        stroke="currentColor"
                        className="text-gray-500"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip active cursor={{ stroke: 'currentColor', strokeWidth: 2 }} offset={6} content={
                        <CustomTooltip fancy={args.fancy} mixed={args.mixed} active={false} payload={[]} label={""} />
                    } />
                    <CartesianGrid horizontal={false} strokeDasharray={3} className="text-[--ui-light-border-color] dark:text-[--ui-dark-border-color]" stroke="currentColor" />
                    <Area
                        className="text-accent-500"
                        dataKey="Savings"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                        fill="url(#colorOld)"
                    />
                    <Area
                        className="text-primary-600 dark:text-primary-500"
                        dataKey="Spends"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                        fill="url(#colorNew)"
                    />
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