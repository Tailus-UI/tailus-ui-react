import * as DialogPrimitive from "@radix-ui/react-dialog";
import {dialog as dialogTheme} from "@tailus/themer-dialog";
import {cn} from "../../lib/utils.ts";
import React from "react";
import Button from "../button/Button.tsx";
import {dialog, type DialogProps } from "@tailus/themer"

// Creating DialogRoot component using DialogPrimitive.Root
const DialogRoot = DialogPrimitive.Root;

// Creating DialogTrigger component using DialogPrimitive.Trigger
const DialogTrigger = DialogPrimitive.Trigger;

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
  React.ComponentProps<typeof DialogPrimitive.Content> & DialogProps
  >(({ className, fancy, mixed, ...props }, forwardedRef) => {
    const { content } = dialog()
    
    if (fancy && mixed) {
      throw new Error('The fancy and mixed props cannot be used together.');
    }
    
    return(
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={content({ fancy, mixed, className })}
      />
    )
  });

// Creating DialogTitle component using DialogPrimitive.Title
// This component is forwarded a ref and other props
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title>
>(({className, ...props}, forwardedRef) => (
  <DialogPrimitive.Title
    {...props}
    ref={forwardedRef}
    className={""}
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
    className={""}
  />
));

// Creating DialogActions component using a div
// This component is forwarded a ref and other props
const DialogActions = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentProps<"div">
  >(({ className, ...props }, forwardedRef) => {
      const { actions } = dialog()
    return (
      <div
        {...props}
        ref={forwardedRef}
        className={actions({className})}
        />
      )
  });

// Defining the type for DialogCloseButtonProps
type DialogCloseButtonProps = React.ComponentProps<typeof Button.Root>;

// Creating DialogCloseButton component using Button
// This component accepts className and other props
const DialogCloseButton: React.FC<DialogCloseButtonProps> = ({className, ...props}) => (
  <Button.Root
    {...props}
    className={cn(dialogTheme.closeButton, "size-5 rounded-full absolute top-1 right-1")}
  >
    <Button.Icon type="only" size="xs">
        {props.children}
    </Button.Icon>
  </Button.Root>
);

// Creating DialogClose component using DialogPrimitive.Close
const DialogClose = DialogPrimitive.Close;

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