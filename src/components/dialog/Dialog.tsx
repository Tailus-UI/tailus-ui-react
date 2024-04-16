import * as DialogPrimitive from "@radix-ui/react-dialog";
import {dialog as dialogTheme} from "@tailus/themer-dialog";
import {cn} from "../../lib/utils.ts";
import React from "react";
import Button from "../button/Button.tsx";
import {
  dialog,
  title,
  text,
  type DialogProps,
  type TitleSizeProp,
  type TextProps,
  type TextSizeProp,
  type TextAlignProp,
  type TextWeightProp
} from "@tailus/themer"

const DialogRoot = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

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

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title> & {
    size?: TitleSizeProp,
    align?: TextAlignProp,
    weight?: TextWeightProp
  }
>(({className, size="base", align, weight="medium", ...props}, forwardedRef) => (
  <DialogPrimitive.Title
    {...props}
    ref={forwardedRef}
    className={
      title({
        size,
        align,
        weight,
        className
      })
    }
  />
));

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentProps<typeof DialogPrimitive.Description> & TextProps & {
    size?: TextSizeProp,
    align?: TextAlignProp,
    weight?: TextWeightProp
  }
>(({className, size, weight, align, neutral, ...props}, forwardedRef) => (
  <DialogPrimitive.Description
    {...props}
    ref={forwardedRef}
    className={
      text({
        size,
        weight,
        align,
        neutral,
        className
      })
    }
  />
));

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

type DialogCloseButtonProps = React.ComponentProps<typeof Button.Root>;

const DialogCloseButton: React.FC<DialogCloseButtonProps> = ({className, ...props}) => (
  <Button.Root
    {...props}
    className={cn(dialogTheme.closeButton, "rounded-full absolute top-1 right-1")}
  >
    <Button.Icon type="only" size="xs">
        {props.children}
    </Button.Icon>
  </Button.Root>
);

export default {
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