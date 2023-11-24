import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import {toast as theme} from "@tailus/themer-toast";
import {cn} from "../../lib/utils.ts";

const ToastProvider = ToastPrimitive.Provider;

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root>
>((props, forwardedRef) => {
  return (
    <ToastPrimitive.Root
      ref={forwardedRef}
      className={cn(theme.root, props.className)}
      {...props}
    />
  );
});

const Toast = {
  Provider: ToastProvider,
  Root: ToastRoot,
}

export default Toast;

export {
  ToastProvider,
  ToastRoot,
}