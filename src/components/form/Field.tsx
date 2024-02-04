import { Field } from "@radix-ui/react-form";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";
import React from "react";
import {
  outlinedForm as outlinedTheme,
  softForm as softTheme,
  mixedForm as mixedTheme
} from "@tailus/themer-form";

export type FormFieldVariantProps = VariantProps<typeof formFieldVariants>;
const formFieldVariants = cva('', {
  variants: {
    variant: {
      outlined: outlinedTheme.field,
      soft: softTheme.field,
      mixed: mixedTheme.field,
    },
  }
});

export interface FormFieldProps extends FormFieldVariantProps {
    className?: string;
}

const FormField = React.forwardRef<
    React.ElementRef<typeof Field>,
    React.ComponentPropsWithoutRef<typeof Field> & FormFieldProps
>(({ className, variant = "outlined", name, ...props }, forwardedRef) => (
    <Field
        ref={forwardedRef}
        name={name}
        className={cn(formFieldVariants({ variant: variant }), className)}
        {...props}
    />
));

export default FormField;