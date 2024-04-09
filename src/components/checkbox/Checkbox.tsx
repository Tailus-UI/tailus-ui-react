import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {checkbox as checkboxTheme, ringVariant as checkBoxRingTheme} from "@tailus/themer-checkbox";
import React, {forwardRef} from "react";
import {cn} from "../../lib/utils";

import { tv, type VariantProps } from "tailwind-variants"

const checkbox = tv({
  base: "border border-[--form-border-color] shadow-sm group rounded peer flex justify-center items-center size-5 text-white outline-2 outline-primary-600 outline-offset-2 text-white hover:brightness-95 focus-visible:outline dark:bg-gray-500/10 data-[state=checked]:border-none data-[state=indeterminate]:border-none disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:opacity-50 disabled:border-gray-300 dark:disabled:border-gray-700 disabled:shadow-none disabled:data-[state=checked]:bg-gray-300 dark:disabled:data-[state=checked]:bg-gray-700 dark:disabled:data-[state=indeterminate]:bg-gray-800 disabled:data-[state=checked]:shadow-none disabled:data-[state=indeterminate]:bg-gray-300 disabled:data-[state=indeterminate]:shadow-none",
  variants: {
    intent: {
      primary: "data-[state=checked]:bg-primary-600 data-[state=indeterminate]:bg-primary-600",
      gray: "data-[state=checked]:bg-gray-600 data-[state=indeterminate]:bg-gray-600",
      neutral: "data-[state=checked]:bg-gray-950 dark:data-[state=checked]:bg-white data-[state=indeterminate]:bg-gray-950 dark:data-[state=indeterminate]:bg-white dark:text-gray-950 dark:disabled:text-white",
    }
  },
})

const fancyCheckbox = tv({
  extend: checkbox,
  base: "dark:[--radial-opacity:0] data-[state=checked]:[--radial-opacity:0.3] data-[state=checked]:[box-shadow:rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,var(--checkbox-border-color)_0px_0px_0px_1px] data-[state=checked]:hover:brightness-[1.1] data-[state=checked]:[background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)] data-[state=indeterminate]:[--radial-opacity:0.3] data-[state=indeterminate]:[box-shadow:rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,var(--checkbox-border-color)_0px_0px_0px_1px] data-[state=indeterminate]:hover:brightness-[1.1] data-[state=indeterminate]:[background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)]",
  variants: {
    intent: {
      primary: "data-[state=checked]:[--checkbox-border-color:theme(colors.primary.600)] data-[state=indeterminate]:[--checkbox-border-color:theme(colors.primary.600)]",
      gray: "data-[state=checked]:[--checkbox-border-color:theme(colors.gray.600)] data-[state=indeterminate]:[--checkbox-border-color:theme(colors.gray.600)]",
      neutral: "data-[state=checked]:[--checkbox-border-color:theme(colors.gray.950)] dark:data-[state=checked]:text-gray-950 data-[state=indeterminate]:[--checkbox-border-color:theme(colors.gray.950)]",
    }
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkbox>;

export interface CheckboxProps extends CheckboxVariantProps {
  className?: string;
  fancy?: boolean;
}

const CheckboxRoot = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
  >(({ className, intent, fancy, ...props }: CheckboxProps, forwardedRef) => {
    const classes = fancy ? fancyCheckbox({ intent, className }) : checkbox({ intent, className });
    return(
      <CheckboxPrimitive.Root
        ref={forwardedRef}
        className={classes}
        {...props}
      />
    )
});

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
    className=" "
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
};