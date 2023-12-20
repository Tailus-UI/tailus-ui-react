import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {cn} from '../../lib/utils';
import {
  avatar as solidTheme,
  softFallbackAvatar as softTheme
} from "@tailus/themer-avatar";
import React from "react";

const variants = {
  soft: softTheme,
  solid: solidTheme
};

type AvatarVariant = "solid" | "soft";
type Intent = "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "info" | "gray";
type Status = "online" | "offline" | "away" | "busy";
type Size = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarProps = {
  variant: AvatarVariant,
  intent: Intent,
  size: Size
}

const AvatarContext = React.createContext<AvatarProps>({
  variant: "solid",
  intent: "primary",
  size: "md",
});

type StatusPosition = "top" | "bottom";

interface AvatarRootProps {
  isSoft?: boolean,
  size?: Size,
  intent?: Intent,
  status?: Status,
  statusPosition?: StatusPosition,
}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarRootProps
>(({className, ...props}, ref) => {
  const {isSoft, size} = props;
  const contextValues = React.useContext(AvatarContext);
  const variant = isSoft ? "soft" : contextValues.variant;

  const updatedContextValues = {
    variant: variant,
    intent: props.intent || contextValues.intent,
    size: size || contextValues.size,
  };

  const statusPosition = props.statusPosition
    ? (props.statusPosition === "top" ? "topStatus" : "bottomStatus")
    : "bottomStatus";

  const status = props.status || "online";

  return (
    <AvatarContext.Provider value={updatedContextValues}>
      <AvatarPrimitive.Root
        {...props}
        ref={ref}
        className={
          cn(
            variants[variant].root[size || contextValues.size],
            variants[variant][statusPosition][status],
            className
          )
        }
      />
    </AvatarContext.Provider>
  );
});

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({className, ...props}, ref) => {
  const {intent, variant} = React.useContext(AvatarContext);
  return (
    <AvatarPrimitive.Fallback
      {...props}
      ref={ref}
      className={cn(variants[variant].fallback[intent], className)}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({className, ...props}, ref) => {
  const {variant} = React.useContext(AvatarContext);
  return (
    <AvatarPrimitive.Image
      {...props}
      ref={ref}
      className={cn(variants[variant].image, className)}
    />
  );
});

const Avatar = {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
}

export default Avatar;

export {
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
}
