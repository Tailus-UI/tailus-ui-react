import * as DialogPrimitive from "@radix-ui/react-dialog";
import {dialog as dialogTheme} from "@tailus/themer-dialog";
import {cn} from "../../lib/utils.ts";
import React from "react";
import {Button} from "../button/Button.tsx";

const DialogRoot = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

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

type DialogCloseButtonProps = React.ComponentProps<typeof Button>;
const DialogCloseButton: React.FC<DialogCloseButtonProps> = ({className, ...props}) => (
  <Button
    {...props}
    className={cn(dialogTheme.closeButton, className)}
  />
);

const DialogClose = DialogPrimitive.Close;

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

export default Dialog;

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