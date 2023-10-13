import { badge, outlinedBadge, softBadge, } from "@tailus/themer-badge"
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const variantsMap = {
    solid: badge,
    outlined: outlinedBadge,
    soft: softBadge
}

const colorsMap = {
    primary: "primary",
    secondary: "secondary",
    accent: "accent",
    danger: "danger",
    success: "success",
    warning: "warning",
    info: "info",
    gray: "gray",
}

const sizesMap = {
    sm: "sm",
    md: "md",
    lg: "lg",
}

const badgeVariants = cva([''], {
    variants: {
      variant: variantsMap ,
      colorVariant: colorsMap,
      size: sizesMap,
    },
    defaultVariants: {
        variant: 'outlined',
        colorVariant: 'primary',
        size: 'md'
    }
  });


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({
    className,
    variant,
    colorVariant,
    size,
    children,
    ...props
  }) => {
   
    const badgeUtilities = variantsMap[variant!][colorVariant!][size!]
    const classes = cn(badgeUtilities, className);
    return(
        <span  className={classes} {...props} role="badge">
            {children}
        </span>
    )
  }

Badge.defaultProps = {
  variant: "solid",
  colorVariant: "danger",
  size: "md"
}

