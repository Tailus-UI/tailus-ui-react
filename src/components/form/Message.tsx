import { Message } from "@radix-ui/react-form";
import React from "react";
import {
    form,
    type MessageProps,
} from "@tailus/themer"

export interface FormMessageProps extends MessageProps{
  className?: string;
}

const FormMessage = React.forwardRef<
  React.ElementRef<typeof Message>,
  React.ComponentPropsWithoutRef<typeof Message> & FormMessageProps
  >(({ className, size = "sm", ...props }, forwardedRef) => {
    const { message } = form()
    return (
      <Message
        ref={forwardedRef}
        className={message({ size, className})}
        {...props}
      />
    )
});

export default FormMessage;
