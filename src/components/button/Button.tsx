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
  ...props
}) => {
  const buttonUtilities = variantsMap[variant!][icon!][colorVariant!][size!];
  const classes = cn(buttonUtilities, className);
  const Component = href ? 'a' : 'button';

  if (icon === 'only') {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <svg className={variantsMap[variant!][icon!].icon[size!]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
      </Component>
    );
  } else if (icon === 'leading') {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <svg className={variantsMap[variant!][icon!].icon[size!]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
        <span>{label}</span>
      </Component>
    );
  } else if (icon === 'trailing') {
    return (
      <Component href={href} className={classes} {...props} disabled={disabled}>
        <span>{label}</span>
        <svg className={variantsMap[variant!][icon!].icon[size!]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
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