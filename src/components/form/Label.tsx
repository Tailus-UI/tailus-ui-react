import { Label } from "@radix-ui/react-form";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";
import React from "react";
import { outlinedForm as theme } from "@tailus/themer-form";

export type FormLabelVariantProps = VariantProps<typeof formLabelVariants>;
const formLabelVariants = cva('', {
  variants: {
    size: {
      xs: theme.label.xs,
      sm: theme.label.sm,
      md: theme.label.md,
    },
  }
});

export interface FormLabelProps extends FormLabelVariantProps {
  className?: string;
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & FormLabelProps
>(({ className, size = "sm", ...props }, forwardedRef) => (
  <Label
    ref={forwardedRef}
    className={cn(formLabelVariants({ size: size }), className)}
    {...props}
  />
));

export default FormLabel;