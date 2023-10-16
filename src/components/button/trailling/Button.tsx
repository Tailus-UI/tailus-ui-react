import { ghostTrailingIconButton, outlinedTrailingIconButton, softTrailingIconButton, trailingIconButton } from "@tailus/themer-button"
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';


const variantsMap = {
    solid: trailingIconButton,
    soft: softTrailingIconButton,
    outlined: outlinedTrailingIconButton,
    ghost: ghostTrailingIconButton,
}

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
}

const sizesMap = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
}

const buttonVariants = cva([''], {
    variants: {
      variant: variantsMap,
      colorVariant: colorsMap,
      size: sizesMap,
    },
    defaultVariants: {
      variant: 'soft',
      colorVariant: 'primary',
      size: 'md',
    },
  });


export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    disabled?: boolean
}


export const Button: React.FC<ButtonProps> = ({
    className,
    colorVariant,
    variant,
    size,
    disabled,
    children,
    ...props
  }) => {
    const buttonUtilities = variantsMap[variant!][colorVariant!][size!]
    const classes = cn(buttonUtilities, className)
    
    return (
        <button className={classes} {...props} disabled={disabled}>
        <span>{children}</span>
        <svg className={variantsMap[variant!].icon[size!]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
    </button>
    );
  };