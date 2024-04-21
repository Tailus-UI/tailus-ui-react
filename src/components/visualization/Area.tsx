import React from 'react';
import {
    Area as Primitive,
    type AreaProps,
} from 'recharts';
export { AreaChart } from "recharts"
import { tv } from "tailwind-variants"

const area = tv({
    variants: {
        intent: {
            primary: "stroke-primary-600",
            secondary: "stroke-secondary-600",
            accent: "stroke-secondary-600",
            gray: "stroke-gray-600",
            neutral : "stroke-gray-950 dark:stroke-white"
        },
        gradient: {
            false : ""
        },
    },
    compoundVariants: [
        {
            gradient: false,
            intent: "primary",
            class : "fill-primary-500/15"
        },
        {
            gradient: false,
            intent: "secondary",
            class : "fill-secondary-500/15"
        },
        {
            gradient: false,
            intent: "accent",
            class : "fill-accent-500/15"
        },
        {
            gradient: false,
            intent: ["gray", "neutral"],
            class : "fill-gray-500/15"
        }
    ],
    defaultVariants: {
        intent: "primary",
        gradient : false
    }
})

type AreaVariants = {
    intent?: keyof typeof area.variants.intent
    gradient? : boolean
}

export const Area = React.forwardRef<Primitive, AreaProps & AreaVariants >(({ intent, gradient, ref, ...props}) => {
    return (
        <Primitive
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
            className={area({ intent, gradient, class: props.className })}
            {...props}
        />
    );
});