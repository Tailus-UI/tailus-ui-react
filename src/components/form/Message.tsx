import { Message } from "@radix-ui/react-form";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";
import React from "react";
import { outlinedForm as theme } from "@tailus/themer-form";

export type FormMessageVariantProps = VariantProps<typeof formMessageVariants>;
const formMessageVariants = cva('', {
  variants: {
    intent: {
      warning: theme.message.warning,
      danger: theme.message.danger,
      gray: theme.message.gray,
    },
  }
});

export interface FormMessageProps extends FormMessageVariantProps {
  className?: string;
}

const FormMessage = React.forwardRef<
  React.ElementRef<typeof Message>,
  React.ComponentPropsWithoutRef<typeof Message> & FormMessageProps
>(({ className, intent = "warning", match, ...props }, forwardedRef) => (
  <Message
    ref={forwardedRef}
    className={cn(formMessageVariants({ intent: intent }), className)}
    match={match}
    {...props}
  />
));

export default FormMessage;
