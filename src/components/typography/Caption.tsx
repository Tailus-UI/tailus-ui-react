import {
    caption,
    type CaptionProps as CaptionVariants,
    type TextAlignProp,
    type TextWeightProp
} from "@tailus/themer"
import React from "react"

type CaptionSize = CaptionVariants["size"]
type TitleSizeProp = CaptionSize |  {
    initial?: CaptionSize,
    sm?: CaptionSize,
    md?: CaptionSize,
    lg?: CaptionSize,
    xl?: CaptionSize,
    xxl?: CaptionSize,
}

export interface CaptionProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "p" | "div" | "span",
    children: React.ReactNode,
    className?: string,
    size?: TitleSizeProp;
    align?: TextAlignProp;
    weight? : TextWeightProp
}

export const Caption: React.FC<CaptionProps> = ({
    size,
    as="p",
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const CaptionElement = as
    return (
        <CaptionElement className={caption({
            size,
            weight,
            align,
            className
        })} {...props}>
            {children}
        </CaptionElement>
    )
}

Caption.displayName = "Caption"