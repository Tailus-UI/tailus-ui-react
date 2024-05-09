import React from 'react';
import { gradientStop, type AreaProps as AreaVariants } from "@tailus/themer"

export const LinearGradient: React.FC<Omit<AreaVariants, "gradient"> & {id:string}> = ({intent, id}) => {
    return (
        <linearGradient x1={0} y1={0} x2={0} y2={1} id={id}>
            <stop className={gradientStop({intent})} offset="5%" stopColor="currentColor" stopOpacity={0.8} />
            <stop className="text-white dark:text-gray-950" offset="95%" stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
    )
}