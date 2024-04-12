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

export interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as: "p" | "div" | "span",
    children: React.ReactNode,
    className?: string,
    size?: TitleSizeProp;
    align?: TextAlignProp;
    weight? : TextWeightProp
}

export const Text: React.FC<TextProps> = ({
    size,
    as,
    weight,
    align,
    children,
    className,
    ...props
}) => {
    const TextElement = as
    return (
        <TextElement className={text({
            size,
            weight,
            align,
            className
        })} {...props}>
            {children}
        </TextElement>
    )
}