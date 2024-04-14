import {
    list,
    type ListProps as ListVariants,
    type TextWeightProp
} from "@tailus/themer"
import React from "react"

type ListSize = ListVariants["size"]
type ListInside = ListVariants["inside"]
type ListSizeProp = ListSize |  {
    initial?: ListSize,
    sm?: ListSize,
    md?: ListSize,
    lg?: ListSize,
    xl?: ListSize,
    xxl?: ListSize,
}
type ListInsideProp = ListInside |  {
    initial?: ListInside,
    sm?: ListInside,
    md?: ListInside,
    lg?: ListInside,
    xl?: ListInside,
    xxl?: ListInside,
}

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
    as?: "ul" | "ol",
    children: React.ReactNode,
    className?: string,
    size?: ListSizeProp;
    weight?: TextWeightProp;
    neutral?: boolean;
    inside?: ListInsideProp;
    type?: ListVariants["type"]
}

export const List: React.FC<ListProps> = ({
    size,
    as="ul",
    weight,
    neutral,
    inside,
    type,
    children,
    className,
    ...props
}) => {

    as = as || type === "disc" ? "ul" : "ol"
    const ListElement = as

    if (as === "ul" && type === "decimal") {
        console.warn('Warning: You have set "as" to "ul" and "type" to "decimal". This can cause accessibility issues.');
    } else if (as === "ol" && type === "disc") {
        console.warn('Warning: You have set "as" to "ol" and "type" to "disc". This can cause accessibility issues.');
    }

    return (
        <ListElement className={list({
            size,
            inside,
            type,
            neutral,
            weight,
            className
        })} {...props}>
            {children}
        </ListElement>
    )
}

List.displayName = "Text"