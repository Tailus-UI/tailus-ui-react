import React from "react"
import {
    caption,
    type CaptionProps as CaptionVariants,
    type TextAlignProp,
    type TextWeightProp
} from "@tailus/themer"

type CaptionSize = CaptionVariants["size"]
type CaptionSizeProp = CaptionSize |  {
    initial?: CaptionSize,
    sm?: CaptionSize,
    md?: CaptionSize,
    lg?: CaptionSize,
    xl?: CaptionSize,
    xxl?: CaptionSize,
}

export interface CaptionProps extends React.HTMLAttributes<
    HTMLParagraphElement | HTMLSpanElement | HTMLDivElement> {
    as?: "p" | "div" | "span" | "em" | "strong",
    children: React.ReactNode,
    className?: string,
    size?: CaptionSizeProp;
    align?: TextAlignProp;
    weight?: TextWeightProp;
    neutral?: boolean;
}

export const Caption: React.FC<CaptionProps> = ({
    size,
    as="p",
    weight,
    align,
    neutral,
    children,
    className,
    ...props
}) => {
    const CaptionElement = as

    if (as === "strong") {
        weight = weight || "medium"
        neutral = neutral || true
    } else if (as === "em") {
        neutral = neutral || true
    }
    
    return (
        <CaptionElement className={caption({
            size,
            weight,
            align,
            neutral,
            className
        })} {...props}>
            {children}
        </CaptionElement>
    )
}

Caption.displayName = "Caption"