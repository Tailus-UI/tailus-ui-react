import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {checkbox as checkboxTheme, ringVariant as checkBoxRingTheme} from "@tailus/themer-checkbox";
import React, {forwardRef} from "react";
import {cn} from "../../lib/utils";
import {cva, type VariantProps} from "class-variance-authority";

const checkboxRoot = cva(checkboxTheme.root, {
  variants: {
    variant: {
      checkbox: checkboxTheme.root,
      ring: checkBoxRingTheme.root,
    }
  },
});

export interface CheckboxProps
  extends VariantProps<typeof checkboxRoot> {
  className?: string;
  props?: React.ComponentProps<typeof CheckboxPrimitive.Root>;
}

const CheckboxRoot = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, variant = 'checkbox', ...props}: CheckboxProps, forwardedRef) => (
  <CheckboxPrimitive.Root
    ref={forwardedRef}
    className={cn(checkboxRoot({variant}), className)}
    {...props}
  />
));

const checkboxIndicator = cva(checkboxTheme.indicator, {
  variants: {
    variant: {
      checkbox: checkboxTheme.indicator,
      ring: checkBoxRingTheme.indicator,
    }
  },
});

export interface CheckboxIndicatorProps
  extends VariantProps<typeof checkboxIndicator> {
  className?: string;
  props?: React.ComponentProps<typeof CheckboxPrimitive.Indicator>;
}

const CheckboxIndicator = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({className, variant = 'checkbox', ...props}: CheckboxIndicatorProps, forwardedRef) => (
  <CheckboxPrimitive.Indicator
    ref={forwardedRef}
    className={cn(checkboxIndicator({variant}), className)}
    {...props}
  />
));

const checkboxLabel = cva(checkboxTheme.label, {
  variants: {
    variant: {
      checkbox: checkboxTheme.label,
      ring: checkBoxRingTheme.label,
    }
  },
});

export interface CheckboxLabelProps
  extends VariantProps<typeof checkboxLabel> {
  className?: string;
  props?: React.ComponentProps<"label">;
}

const CheckboxLabel = forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({className, variant = 'checkbox', ...props}: CheckboxLabelProps, forwardedRef) => (
  <label
    ref={forwardedRef}
    className={cn(checkboxLabel({variant}), className)}
    {...props}
  />
));

export {
    CheckboxRoot,
    CheckboxIndicator,
    CheckboxLabel,
}