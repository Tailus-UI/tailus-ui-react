import {
    text,
    type TextProps as TextVariants,
    type TextAlignProp,
    type TextWeightProp
} from "@tailus/themer"
import React from "react"

type TextSize = TextVariants["size"]
type TitleSizeProp = TextSize |  {
    initial?: TextSize,
    sm?: TextSize,
    md?: TextSize,
    lg?: TextSize,
    xl?: TextSize,
    xxl?: TextSize,
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement | HTMLDivElement> {
    as?: "p" | "div" | "span" | "em" | "strong",
    children: React.ReactNode,
    className?: string,
    size?: TitleSizeProp;
    align?: TextAlignProp;
    weight?: TextWeightProp;
    neutral?: boolean;
}

export const Text: React.FC<TextProps> = ({
    size,
    as="p",
    weight,
    align,
    neutral,
    children,
    className,
    ...props
}) => {

    const TextElement = as

    if (as === "strong") {
        weight = weight || "medium"
        neutral = neutral || true
    } else if (as === "em") {
        neutral = neutral || true
    }
    
    return (
        <TextElement className={text({
            size,
            weight,
            align,
            neutral,
            className
        })} {...props}>
            {children}
        </TextElement>
    )
}

Text.displayName = "Text"