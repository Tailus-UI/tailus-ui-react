import { tv } from "tailwind-variants"
import React from "react"

const codeTheme = tv({
    base: "text-sm inline-block border rounded-md py-px px-1",
    variants: {
        intent: {
            primary: "bg-primary-50 text-primary-600 dark:text-primary-300 border-primary-200 dark:border-primary-500/20 dark:bg-primary-500/5",
            secondary: "bg-secondary-50 text-secondary-600 dark:text-secondary-300 border-secondary-200 dark:border-secondary-500/20 dark:bg-secondary-500/5",
            accent: "bg-accent-50 text-accent-600 dark:text-accent-300 border-accent-200 dark:border-accent-500/20 dark:bg-accent-500/5",
            gray: "bg-gray-50 text-[--body-text-color] dark:border-gray-500/20 dark:bg-gray-500/5 dark:border-gray-500/20",
            neutral: "bg-gray-50 text-gray-950 dark:text-white dark:bg-gray-500/5 dark:border-gray-500/20",
        }
    },
    defaultVariants: {
        intent: "gray",
    }
})

export interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
    intent?: keyof typeof codeTheme.variants.intent
}

export const Code = React.forwardRef<HTMLPreElement, CodeProps>(({
    intent = "gray",
    children,
    className,
    ...props
}, ref) => {
    return (
        <pre ref={ref} className={codeTheme({ intent, className })} {...props}>
            {children}
        </pre>
    )
})