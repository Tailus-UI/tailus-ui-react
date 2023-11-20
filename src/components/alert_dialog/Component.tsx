import {
  alertDialog as defaultTheme,
  centredAlertDialog as centredTheme,
} from "@tailus/themer-alert-dialog"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {cn} from "../../lib/utils.ts";
import React from "react";

export const VariantContext = React.createContext<"centred" | "default">("default");
interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  variant?: "centred" | "default"
}

const AlertDialogRoot: React.FC<AlertDialogProps> = ({variant = "default", ...props}) => {
    return (
        <VariantContext.Provider value={variant}>
        <AlertDialogPrimitive.Root {...props} />
        </VariantContext.Provider>
    )
}

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({className, ...props}, forwardedRef) => {
  const variant = React.useContext(VariantContext);
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
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({className, ...props}, forwardedRef) => {
  const variant = React.useContext(VariantContext);
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
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({className, ...props}, forwardedRef) => {
  const variant = React.useContext(VariantContext);
  const theme = variant === "centred" ? centredTheme : defaultTheme;
  return (
    <AlertDialogPrimitive.Title
      {...props}
      ref={forwardedRef}
      className={cn(theme.title, className)}
    />
  )
});

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({className, ...props}, forwardedRef) => {
  const variant = React.useContext(VariantContext);
  const theme = variant === "centred" ? centredTheme : defaultTheme;
  return (
    <AlertDialogPrimitive.Description
      {...props}
      ref={forwardedRef}
      className={cn(theme.description, className)}
    />
  )
});

const AlertDialogCancel = AlertDialogPrimitive.Cancel;
const AlertDialogAction = AlertDialogPrimitive.Action;

const AlertDialogActions = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({className, ...props}, forwardedRef) => {
  const variant = React.useContext(VariantContext);
  const theme = variant === "centred" ? centredTheme : defaultTheme;
  return (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(theme.actions, className)}
    />
  )
});

const AlertDialogImageContainer = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { intent?: "danger" | "warning" | "info" }
>(({className, intent = 'danger', ...props}, forwardedRef) => {
  const variant = React.useContext(VariantContext);
  const theme = variant === "centred" ? centredTheme : defaultTheme;
  return (
    <div
      {...props}
      ref={forwardedRef}
      className={cn(theme.imageContainer[intent], className)}
    />
  )
});

interface AlertDialogImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string,
}

const AlertDialogImage: React.FC<AlertDialogImageProps> = ({className, ...props}) => {
  const variant = React.useContext(VariantContext);
  const theme = variant === "centred" ? centredTheme : defaultTheme;
  return <img {...props} className={cn(theme.image, className)} alt={props.alt}/>;
};

const AlertDialog = {
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
  ImageContainer: AlertDialogImageContainer,
  Image: AlertDialogImage
}

export default AlertDialog;

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
  AlertDialogImageContainer,
  AlertDialogImage
}