import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React, {forwardRef} from "react";
import { checkbox, fancyCheckbox, type CheckboxProps as CheckboxVariants } from "@tailus/themer"

export interface CheckboxProps extends CheckboxVariants {
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

export {
  CheckboxRoot,
  CheckboxIndicator,
};

export default {
  Root: CheckboxRoot,
  Indicator : CheckboxIndicator
}