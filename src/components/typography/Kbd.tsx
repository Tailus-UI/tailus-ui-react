import React from "react"
import { kbdTheme } from "@tailus/themer"

export interface KbdProps extends React.HTMLAttributes<HTMLElement>{}
    
export const Kbd = React.forwardRef<HTMLPreElement, KbdProps>(({
    children,
    className,
    ...props
}, ref) => {
    return (
        <kbd ref={ref} className={kbdTheme({className })} {...props}>
            {children}
        </kbd>
    )
})