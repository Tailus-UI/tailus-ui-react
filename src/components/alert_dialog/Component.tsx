import {
  alertDialog as defaultTheme,
  centredAlertDialog as centredTheme,
} from "@tailus/themer-alert-dialog"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {cn} from "../../lib/utils.ts";
import React from "react";

const AlertDialogRoot = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

type AlertDialogProps = {
    variant?: "centred" | "default"
}

const AlertDialogOverlay = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & AlertDialogProps
>(({className, variant = 'default', ...props}, forwardedRef) => {
  const theme = variant === "centred" ? centredTheme : defaultTheme;
  return (
    <AlertDialogPrimitive.Overlay
      {...props}
      ref={forwardedRef}
      className={cn(theme.overlay, className)}
    />
  )
})

const AlertDialogContent = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & AlertDialogProps
>(({className, variant = 'default', ...props}, forwardedRef) => {
    const theme = variant === "centred" ? centredTheme : defaultTheme;
    return (
        <AlertDialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={cn(theme.content, className)}
        />
    )
});

const AlertDialogTitle = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & AlertDialogProps
>(({className, variant = 'default', ...props}, forwardedRef) => {
    const theme = variant === "centred" ? centredTheme : defaultTheme;
    return (
        <AlertDialogPrimitive.Title
        {...props}
        ref={forwardedRef}
        className={cn(theme.title, className)}
        />
    )
});

export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
}