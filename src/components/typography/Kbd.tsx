import { tv } from "tailwind-variants"
import React from "react"

const kbdTheme = tv({
    base: "inline-flex items-center justify-center text-gray-800 dark:text-white h-5 text-[11px] min-w-5 px-1.5 rounded font-sans bg-gray-100 dark:bg-white/10 ring-1 border-b border-t border-t-white border-b-gray-200 dark:border-t-transparent dark:border-b-gray-950 ring-gray-300 dark:ring-white/15",
})

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