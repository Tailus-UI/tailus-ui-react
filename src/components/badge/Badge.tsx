import { badge, type BadgeType } from "@tailus/themer"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeType {}

export const Badge: React.FC<BadgeProps> = ({
    className,
    children,
    intent, 
    size,
    variant,
    ...props
  }) => {
   
    return(
        <span className={badge[variant]({intent, size})} {...props}>
            {children}
        </span>
    )
}
  
Badge.displayName = "Badge";

Badge.defaultProps = {
  variant: "solid",
  intent: "danger",
  size: "md"
}