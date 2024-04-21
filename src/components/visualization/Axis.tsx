import {
    YAxis as YPrimitive,
    XAxis as XPrimitive,
    type YAxisProps,
    type XAxisProps
} from 'recharts';
import React from 'react';
import { axis } from '@tailus/themer';

export const YAxis: React.FC<YAxisProps> = (props) => {
    return (
        <YPrimitive
            stroke="currentColor"
            className={axis({class:props.className})}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            {...props}
        />
    )
}

export const XAxis: React.FC<XAxisProps> = (props) => {
    return (
        <XPrimitive
            stroke="currentColor"
            className={axis({class:props.className})}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            xAxisId={0}
        />
    )
}

export default {
    X: XAxis,
    Y: YAxis
}