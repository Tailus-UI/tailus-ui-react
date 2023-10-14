import * as CheckboxUi from "@radix-ui/react-checkbox";
import {checkbox, ringVariant } from "@tailus/themer-checkbox";
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { useState } from "react";

const variantsMap = {
    default: checkbox,
    ring: ringVariant,
}

const checkboxVariants = cva([''], {
    variants: {
      variant: variantsMap ,
    },
    defaultVariants: {
        variant: 'default',
    }
});

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof checkboxVariants> {
    typeOfChecked: 'checked' | 'defaultChecked'
}

export const Checkbox: React.FC<CheckboxProps> = ({
    className,
    variant,
    children,
    id,
    typeOfChecked,
    ...props
  }) => {
    
    const [checked, setChecked] = useState(false)
    const classes = cn('flex items-center', className)
    console.log(checked)
    return(
        <div className={classes} {...props}>
           {
            <CheckboxUi.Root
                className={variantsMap[variant!].root}
                checked={typeOfChecked === 'checked' ? checked : undefined}
                defaultChecked={typeOfChecked !== 'checked'}
                id={id}
                onCheckedChange={() => {
                    if (typeOfChecked === 'checked') {
                        setChecked(!checked);
                    }
                }}
            >
                <CheckboxUi.Indicator className={variantsMap[variant!].indicator}>
                    <svg className="h-3 w-3" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.909L4.364 6.54499L13.091 15.272L28.364 -0.00100708L32.728 4.36299L13.092 23.999L0 10.909Z" fill="currentColor" />
                    </svg>
                </CheckboxUi.Indicator>
            </CheckboxUi.Root>
           }
            <label className={variantsMap[variant!].label} htmlFor={id}>
                {children}
            </label>
        </div>
    )
  }

