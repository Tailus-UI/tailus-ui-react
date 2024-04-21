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
            stroke={props.stroke || "currentColor"}
            className={axis({class:props.className})}
            fontSize={props.fontSize || 12}
            tickLine={props.tickLine || false}
            axisLine={props.axisLine || false}
        />
    )
}

export const XAxis: React.FC<XAxisProps> = (props) => {
    return (
        <XPrimitive
            stroke={props.stroke || "currentColor"}
            className={axis({class:props.className})}
            fontSize={props.fontSize || 12}
            tickLine={props.tickLine || false}
            axisLine={props.axisLine || false}
        />
    )
}

export default {
    X: XAxis,
    Y: YAxis
}