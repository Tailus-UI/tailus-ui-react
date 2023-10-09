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

const badgeui = cva([''], {
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

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeui> {}

export const Badge: React.FC<BadgeProps> = ({
    className,
    variant,
    colorVariant,
    size,
    children,
    ...props
  }) => {
   
    const badgeClass = variant === "soft" ? softBadge[colorVariant!][size!] : variant === "outlined" ? outlinedBadge[colorVariant!][size!] : badge[colorVariant!][size!]
    console.log(badgeClass)
    const classes = cn(badgeui({ className }), badgeClass);
    return(
        <span  className={classes} {...props} role="badge">
            {children}
        </span>
    )
  }

