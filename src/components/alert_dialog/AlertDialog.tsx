import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import React from "react";
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

interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {}
const AlertDialogRoot: React.FC<AlertDialogProps> = ({...props}) => {
    return (
        <AlertDialogPrimitive.Root {...props} />
    )
}

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
  >(({ className, ...props }, forwardedRef) => {
    const { overlay } = dialog()

  return (
    <AlertDialogPrimitive.Overlay
      {...props}
      ref={forwardedRef}
      className={overlay({className})}
    />
  )
})

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & DialogProps
  >(({ className, mixed, fancy, ...props }, forwardedRef) => {
  
  const { content } = dialog()
    
  if (fancy && mixed) {
    throw new Error('The fancy and mixed props cannot be used together.');
  }
    
  return (
    <AlertDialogPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={content({fancy, mixed, className})}
    />
  )
});

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & {
    size?: TitleSizeProp,
    align?: TextAlignProp,
    weight?: TextWeightProp
  }
>(({className, size="base", weight="medium", align, ...props}, forwardedRef) => {
  return (
    <AlertDialogPrimitive.Title
      {...props}
      ref={forwardedRef}
      className={
        title({
          size,
          weight,
          align,
          className
        })
      }
    />
  )
});

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & TextProps & {
    size?: TextSizeProp,
    align?: TextAlignProp,
    weight?: TextWeightProp
  }
>(({className, size="base", weight, align, ...props}, forwardedRef) => {
  return (
    <AlertDialogPrimitive.Description
      {...props}
      ref={forwardedRef}
      className={
        text({
          size,
          weight,
          align,
          className,
        })
      }
    />
  )
});

const AlertDialogCancel = AlertDialogPrimitive.Cancel;
const AlertDialogAction = AlertDialogPrimitive.Action;

const AlertDialogActions = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
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

export default {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction,
  Actions: AlertDialogActions,
}

export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogActions,
}