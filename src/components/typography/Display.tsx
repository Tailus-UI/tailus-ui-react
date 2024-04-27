import React from "react"
import {
    display,
    type DisplayProps as DisplayVariants,
    type TextAlignProp,
    type TextWeightProp
} from "@tailus/themer"

type DisplaySize = DisplayVariants["size"]
type DisplaySizeProp = DisplaySize |  {
    initial?: DisplaySize,
    sm?: DisplaySize,
    md?: DisplaySize,
    lg?: DisplaySize,
    xl?: DisplaySize,
    xxl?: DisplaySize,
}

export interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span",
    children: React.ReactNode,
    className?: string,
    size?: DisplaySizeProp;
    align?: TextAlignProp;
    weight? : TextWeightProp
}

export const Display: React.FC<DisplayProps> = ({
    size,
    as="h1",
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const DisplayElement = as
    return (
        <DisplayElement className={display({
            size,
            weight,
            align,
            className
        })} {...props}>
            {children}
        </DisplayElement>
    )
}

Display.displayName = "Display"