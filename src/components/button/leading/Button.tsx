import { ghostLeadingIconButton, leadingIconButton, outlinedLeadingIconButton, softLeadingIconButton} from "@tailus/themer-button"
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';


const variantsMap = {
    solid: leadingIconButton,
    soft: softLeadingIconButton,
    outlined: outlinedLeadingIconButton,
    ghost: ghostLeadingIconButton,
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
    disabled: boolean
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
        <button className={classes} disabled={disabled} {...props}>
       
        <span>{children}</span>
    </button>
    );
  };