import {
    title,
    type TitleProps as TitleVariants,
    type TextAlignProp,
    type TextWeightProp
} from "@tailus/themer"
import React from "react"

type TitleSize = TitleVariants["size"]
type TitleSizeProp = TitleSize |  {
    initial?: TitleSize,
    sm?: TitleSize,
    md?: TitleSize,
    lg?: TitleSize,
    xl?: TitleSize,
    xxl?: TitleSize,
}

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span",
    children: React.ReactNode,
    className?: string,
    size?: TitleSizeProp;
    align?: TextAlignProp;
    weight? : TextWeightProp
}

export const Title: React.FC<TitleProps> = ({
    size,
    as="h1",
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const TitleElement = as
    return (
        <TitleElement className={title({
            size,
            weight,
            align,
            className
        })} {...props}>
            {children}
        </TitleElement>
    )
}

Title.displayName = "Title"