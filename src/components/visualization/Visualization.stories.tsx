import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, Line, LineChart, BarChart, Bar, ScatterChart, Scatter } from 'recharts';
import CartesianGrid from './CartesianGrid';
import { LinearGradient } from "./Area"
import { area, type VTooltipProps as TooltipProps } from "@tailus/themer";
import type { Meta, StoryObj } from '@storybook/react';
import { Custom } from './Tooltip';

const data = [
    { name: 'Jan', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Feb', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Mar', Primary: 2000, Secondary: 3000, Accent: 4000, Gray: 5000, Neutral : 6000},
    { name: 'Apr', Primary: 2780, Secondary: 3780, Accent: 4780, Gray: 5780, Neutral : 6780},
    { name: 'May', Primary: 1890, Secondary: 2890, Accent: 3890, Gray: 4890, Neutral : 5890},
    { name: 'Jun', Primary: 2390, Secondary: 3390, Accent: 4390, Gray: 5390, Neutral : 6390},
    { name: 'Jul', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7490},
    { name: 'Aug', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7490},
    { name: 'Sep', Primary: 5490, Secondary: 6490, Accent: 7490, Gray: 8490, Neutral : 9490},
    { name: 'Oct', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7490},
    { name: 'Nov', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Dec', Primary: 3490, Secondary: 4490, Accent: 5490, Gray: 6490, Neutral : 7470},
];

const barData = [
    { name: 'Mon', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Tue', Primary: 3000, Secondary: 4000, Accent: 5000, Gray: 6000, Neutral : 7000},
    { name: 'Wed', Primary: 2000, Secondary: 3000, Accent: 4000, Gray: 5000, Neutral : 6000},
    { name: 'Thu', Primary: 2780, Secondary: 3780, Accent: 4780, Gray: 5780, Neutral : 6780},
    { name: 'Fri', Primary: 1890, Secondary: 2890, Accent: 3890, Gray: 4890, Neutral : 5890},
    { name: 'Sat', Primary: 2390, Secondary: 3390, Accent: 4390, Gray: 5390, Neutral : 6390},
];

const AriaChart = (args:TooltipProps) => {
    return (
        <div className="h-72 max-w-2xl min-w-[42rem] [--area-stroke:theme(colors.primary.600)]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <CartesianGrid horizontal={false} />
                    <Tooltip
                        cursor={{ stroke: 'var(--vtooltip-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy={args.fancy} mixed={args.mixed}  label={""}/>
                        }
                    />
                    
                    <Area className={area({ intent: "primary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "secondary" })} stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Secondary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "accent" })} stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Accent" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "gray" })} stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Gray" activeDot={{ color: "var(--area-gray-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "neutral" })} stroke="currentColor" fill="currentColor" fillOpacity={0.05} dataKey="Neutral" activeDot={{ color: "var(--area-neutral-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

const AriaChartGradient = (args:TooltipProps) => {
    return (
        <div className="h-72 max-w-2xl min-w-[42rem]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <LinearGradient intent="neutral" id="Neutral" />
                        <LinearGradient intent="gray" id="Gray" />
                        <LinearGradient intent="accent" id="Accent" />
                        <LinearGradient intent="secondary" id="Secondary" />
                        <LinearGradient intent="primary" id="Primary" />
                    </defs>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <CartesianGrid horizontal={false} />
                    <Tooltip
                        cursor={{ stroke: 'var(--vtooltip-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy={args.fancy} mixed={args.mixed}  label={""}/>
                        }
                    />
                    
                    <Area className={area({ intent: "primary" })} stroke="currentColor" fill="url(#Primary)" dataKey="Primary" activeDot={{ color: "var(--area-primary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "secondary" })} stroke="currentColor" fill="url(#Secondary)" dataKey="Secondary" activeDot={{ color: "var(--area-secondary-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "accent" })} stroke="currentColor" fill="url(#Accent)" dataKey="Accent" activeDot={{ color: "var(--area-accent-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "gray" })} stroke="currentColor" fill="url(#Gray)" dataKey="Gray" activeDot={{ color: "var(--area-gray-stroke)", r: 3, stroke: "none" }} />
                    <Area className={area({ intent: "neutral" })} stroke="currentColor" fill="url(#Neutral)" dataKey="Neutral" activeDot={{ color: "var(--area-neutral-stroke)", r: 3, stroke: "none" }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

const LineChartComponentExample = (args:TooltipProps) => {
    return (
        <div className="h-72 max-w-2xl min-w-[42rem]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <defs>
                        <linearGradient className='text-white dark:text-gray-900' id="dotFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <CartesianGrid horizontal />
                    <Tooltip
                        cursor={{ stroke: 'var(--vtooltip-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy={args.fancy} mixed={args.mixed}  label={""}/>
                        }
                    />
                    <Line type="monotone" className={area({ intent: "primary" })} stroke="currentColor" fill="url(#dotFill)" dataKey="Primary" activeDot={{r:4, color:"var(--area-primary-stroke)", stroke:"currentColor"}} />
                    <Line type="monotone" className={area({ intent: "secondary" })} stroke="currentColor" fill="url(#dotFill)" dataKey="Secondary" activeDot={{r:4, color:"var(--area-secondary-stroke)", stroke:"currentColor"}} />
                    <Line type="monotone" className={area({ intent: "accent" })} stroke="currentColor" fill="url(#dotFill)" dataKey="Accent" activeDot={{r:4, color:"var(--area-accent-stroke)", stroke:"currentColor"}} />
                    <Line type="monotone" className={area({ intent: "gray" })} stroke="currentColor" fill="url(#dotFill)" dataKey="Gray" activeDot={{r:4, color:"var(--area-gray-stroke)", stroke:"currentColor"}} />
                    <Line type="monotone" className={area({ intent: "neutral" })} stroke="currentColor" fill="url(#dotFill)" dataKey="Neutral" activeDot={{r:4, color:"var(--area-neutral-stroke)", stroke:"currentColor"}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

const BarChartComponentExample = (args:TooltipProps) => {
    return (
        <div className="h-72 max-w-2xl min-w-[42rem]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <CartesianGrid horizontal />
                    <Tooltip
                        cursor={{ fill:"var(--vtooltip-border-color)", opacity:0.5, strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy={args.fancy} mixed={args.mixed}  label={""}/>
                        }
                    />
                    <Bar className={area({ gradient:true, intent: "primary" })} fill="currentColor" dataKey="Primary" />
                    <Bar className={area({ gradient:true, intent: "secondary" })} fill="currentColor" dataKey="Secondary" />
                    <Bar className={area({ gradient:true, intent: "accent" })} fill="currentColor" dataKey="Accent" />
                    <Bar className={area({ gradient:true, intent: "gray" })} fill="currentColor" dataKey="Gray" />
                    <Bar className={area({ gradient:true, intent: "neutral" })} fill="currentColor" dataKey="Neutral" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

const ScatterChartComponentExample = (args:TooltipProps) => {
    return (
        <div className="h-72 max-w-4xl min-w-[56rem]">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={data}>
                    <YAxis
                        className="text-[--caption-text-color]"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <XAxis
                        className="text-[--caption-text-color]"
                        dataKey="name"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <CartesianGrid horizontal />
                    <Tooltip
                        cursor={{ stroke: 'var(--vtooltip-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy={args.fancy} mixed={args.mixed}  label={""}/>
                        }
                    />
                    <Scatter className={area({ gradient:true, intent: "primary" })} fill="currentColor" dataKey="Primary" />
                    <Scatter className={area({ gradient:true, intent: "secondary" })} fill="currentColor" dataKey="Secondary" />
                    <Scatter className={area({ gradient:true, intent: "accent" })} fill="currentColor" dataKey="Accent" />
                    <Scatter className={area({ gradient:true, intent: "gray" })} fill="currentColor" dataKey="Gray" />
                    <Scatter className={area({ gradient:true, intent: "neutral" })} fill="currentColor" dataKey="Neutral" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

const meta:Meta<TooltipProps> = {
    title: 'Components / Visualisation / Tooltip',
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

export const AriaChartExample: Story = {
    name: 'Aria Chart',
    args: {
        fancy: false,
        mixed: true  
    },
    render : AriaChart
};

export const AriaChartGradientExample: Story = {
    name: 'Aria Chart Gradient',
    args: {
        fancy: false,
        mixed: true  
    },
    render : AriaChartGradient
};

export const LineChartExample: Story = {
    name: 'Line Chart',
    args: {
        fancy: false,
        mixed: true  
    },
    render : LineChartComponentExample
};

export const BarChartExample: Story = {
    name: 'Bar Chart',
    args: {
        fancy: false,
        mixed: true  
    },
    render : BarChartComponentExample
};

export const ScatterChartExample: Story = {
    name: 'Scatter Chart',
    args: {
        fancy: false,
        mixed: true  
    },
    render : ScatterChartComponentExample
};