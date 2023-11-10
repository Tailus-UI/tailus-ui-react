import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {checkbox as checkboxTheme, ringVariant as checkBoxRingTheme} from "@tailus/themer-checkbox";
import React, {forwardRef} from "react";
import {cn} from "../../lib/utils";
import {cva, type VariantProps} from "class-variance-authority";

const checkbox = cva('',{
  variants: {
    variant: {
      default: checkboxTheme.root,
      ring: checkBoxRingTheme.root,
    }
  },
  defaultVariants: {
    variant: 'default',
  }
});

type CheckboxRootProps = {
  className?: string;
  props?: React.ComponentProps<typeof CheckboxPrimitive.Root>;
}

export interface CheckboxProps
  extends VariantProps<typeof checkbox>, CheckboxRootProps {}

const CheckboxRoot = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, variant, ...props}: CheckboxProps, forwardedRef) => (
  <CheckboxPrimitive.Root
    ref={forwardedRef}
    className={cn(checkbox({variant}), className)}
    {...props}
  />
));

type CheckboxIndicatorProps = {
  className?: string;
  props?: React.ComponentProps<typeof CheckboxPrimitive.Indicator>;
}

const CheckboxIndicator = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({className, ...props}: CheckboxIndicatorProps, forwardedRef) => (
  <CheckboxPrimitive.Indicator
    ref={forwardedRef}
    className={ cn(checkboxTheme.indicator, className) }
    {...props}
  />
));

type CheckboxLabelProps = {
  className?: string;
  props?: React.ComponentProps<"label">;
}

const CheckboxLabel = forwardRef<React.ElementRef<"label">, React.ComponentPropsWithoutRef<"label">>(
  ({className, ...props}: CheckboxLabelProps, forwardedRef) => (
    <label
      ref={forwardedRef}
      className={ cn(checkboxTheme.label, className) }
      {...props}
    />
  )
);

export {
    CheckboxRoot,
    CheckboxIndicator,
    CheckboxLabel,
}