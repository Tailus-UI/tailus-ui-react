import * as DialogPrimitive from "@radix-ui/react-dialog";
import {dialog as dialogTheme} from "@tailus/themer-dialog";
import {cn} from "../../lib/utils.ts";
import React from "react";
import {Button} from "../button/Button.tsx";

// Creating DialogRoot component using DialogPrimitive.Root
const DialogRoot = DialogPrimitive.Root;

// Creating DialogTrigger component using DialogPrimitive.Trigger
const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentProps<typeof DialogPrimitive.Trigger>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Trigger
    asChild
    {...props}
    ref={forwardedRef}
    className={cn(className)}
  />
));

// Creating DialogPortal component using DialogPrimitive.Portal
const DialogPortal = DialogPrimitive.Portal;

// Creating DialogOverlay component using DialogPrimitive.Overlay
// This component is forwarded a ref and other props
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentProps<typeof DialogPrimitive.Overlay>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Overlay
    {...props}
    ref={forwardedRef}
    className={cn(dialogTheme.overlay, className)}
  />
));

// Creating DialogContent component using DialogPrimitive.Content
// This component is forwarded a ref and other props
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentProps<typeof DialogPrimitive.Content>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Content
    {...props}
    ref={forwardedRef}
    className={cn(dialogTheme.content, className)}
  />
));

// Creating DialogTitle component using DialogPrimitive.Title
// This component is forwarded a ref and other props
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Title
    {...props}
    ref={forwardedRef}
    className={cn(dialogTheme.title, className)}
  />
));

// Creating DialogDescription component using DialogPrimitive.Description
// This component is forwarded a ref and other props
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentProps<typeof DialogPrimitive.Description>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Description
    {...props}
    ref={forwardedRef}
    className={cn(dialogTheme.description, className)}
  />
));

// Creating DialogActions component using a div
// This component is forwarded a ref and other props
const DialogActions = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentProps<"div">
>(({className, ...props}, forwardedRef) => (
  <div
    {...props}
    ref={forwardedRef}
    className={cn(dialogTheme.actions, className)}
  />
));

// Defining the type for DialogCloseButtonProps
type DialogCloseButtonProps = React.ComponentProps<typeof Button>;

// Creating DialogCloseButton component using Button
// This component accepts className and other props
const DialogCloseButton: React.FC<DialogCloseButtonProps> = ({className, ...props}) => (
  <Button
    {...props}
    className={cn(dialogTheme.closeButton, className)}
  />
);

// Creating DialogClose component using DialogPrimitive.Close
const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentProps<typeof DialogPrimitive.Close>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Close
    asChild
    {...props}
    ref={forwardedRef}
    className={cn(className)}
  />
));

// Creating Dialog object that contains all the Dialog components
const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Actions: DialogActions,
  CloseButton: DialogCloseButton,
  Close: DialogClose,
}

// Exporting Dialog as default
export default Dialog;

// Exporting all the Dialog components
export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogActions,
  DialogCloseButton,
  DialogClose,
}