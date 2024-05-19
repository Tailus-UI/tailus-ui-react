import * as AvatarPrimitive from '@radix-ui/react-avatar';
import React from "react";
import { avatar, fallback, image, type AvatarRootProps, type AvatarFallbackProps } from "@tailus/themer";

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarRootProps
  >(({ className, size = "md", status = "online", bottomStatus = false, topStatus = false, ...props }, ref) => {
    
    if (topStatus && bottomStatus) throw new Error('Cannot have both topStatus and bottomStatus');
    
  return (
    <AvatarPrimitive.Root
      {...props}
      ref={ref}
      className={avatar({size, status: status && status, topStatus, bottomStatus ,className})}
    />
  );
});

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & AvatarFallbackProps
>(({className, variant = "solid", intent, ...props}, ref) => {
  return (
    <AvatarPrimitive.Fallback
      {...props}
      ref={ref}
      className={fallback[variant]({intent, className})}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({className, ...props}, ref) => {
  return (
    <AvatarPrimitive.Image
      {...props}
      ref={ref}
      className={image({className})}
    />
  );
});

export default {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
}

export {
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
}