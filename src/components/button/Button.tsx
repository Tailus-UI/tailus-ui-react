import button, {
  ghostButton,
  ghostIconButton,
  ghostLeadingIconButton,
  ghostTrailingIconButton,
  iconButton,
  leadingIconButton,
  outlinedButton,
  outlinedIconButton,
  outlinedLeadingIconButton,
  outlinedTrailingIconButton,
  softButton,
  softIconButton,
  softLeadingIconButton,
  softTrailingIconButton,
  trailingIconButton
} from "@tailus/themer-button";
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const variantsMap = {
  solid: {
    none: button,
    only: iconButton,
    leading: leadingIconButton,
    trailing: trailingIconButton,
  },
  soft: {
    none: softButton,
    only: softIconButton,
    leading: softLeadingIconButton,
    trailing: softTrailingIconButton,
  },
  ghost: {
    none: ghostButton,
    only: ghostIconButton,
    leading: ghostLeadingIconButton,
    trailing: ghostTrailingIconButton,
  },
  outlined: {
    none: outlinedButton,
    only: outlinedIconButton,
    leading: outlinedLeadingIconButton,
    trailing: outlinedTrailingIconButton,
  }
};

const colorsMap = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  info: 'info',
  gray: 'gray',
  neutral: 'neutral',
};

const sizesMap = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const buttonVariants = cva([''], {
  variants: {
    variant: variantsMap,
    colorVariant: colorsMap,
    size: sizesMap,
  },
  defaultVariants: {
    variant: "solid",
    colorVariant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  label?: string;
  icon: 'none' | 'only' | 'leading' | 'trailing';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  colorVariant,
  variant,
  size,
  disabled,
  label,
  icon,
  href,
  children,
  ...props
}) => {
  const buttonUtilities = variantsMap[variant!][icon!][colorVariant!][size!];
  const classes = cn(buttonUtilities, className);
  const Component = href ? 'a' : 'button';

  if (icon === 'only') {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <span className={variantsMap[variant!][icon!].icon[size!]}>{children}</span>
      </Component>
    );
  } else if (icon === 'leading') {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <span className={variantsMap[variant!][icon!].icon[size!]}>{children}</span>
        <span>{label}</span>
      </Component>
    );
  } else if (icon === 'trailing') {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <span>{label}</span>
        <span className={variantsMap[variant!][icon!].icon[size!]}>{children}</span>
      </Component>
    );
  } else {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <span>{label}</span>
      </Component>
    );
  }
};