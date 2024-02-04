import { Message } from "@radix-ui/react-form";
import { cn } from "../../lib/utils.ts";
import React from "react";
import { outlinedForm as theme } from "@tailus/themer-form";

export interface FormMessageProps {
  intent?: "primary" | "secondary" | "accent" | "warning" | "danger" | "gray" | "info" | "success";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const FormMessage = React.forwardRef<
  React.ElementRef<typeof Message>,
  React.ComponentPropsWithoutRef<typeof Message> & FormMessageProps
>(({ className, intent = "warning", size="sm", match, ...props }, forwardedRef) => (
  <Message
    ref={forwardedRef}
    className={cn(theme.message[intent as keyof typeof theme.message][size], className)}
    match={match}
    {...props}
  />
));

export default FormMessage;
