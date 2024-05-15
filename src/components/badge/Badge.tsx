import { badge, type BadgeProps } from "@tailus/themer"

export interface BadgeVariantsProps extends React.HTMLAttributes<HTMLDivElement>, BadgeProps {}

export const Badge: React.FC<BadgeVariantsProps> = ({
    className,
    children,
    intent, 
    size,
    variant,
    ...props
  }) => {
    variant = variant || "solid";
    return(
        <span className={badge[variant]({intent, size, className})} {...props}>
            {children}
        </span>
    )
}
  
Badge.displayName = "Badge";