import {flag as defaultTheme, flagWithMessage as theme} from "@tailus/themer-flag"
import {cloneElement, cn} from "../../lib/utils.ts";
import React from "react";
import {Button} from "../button/Button.tsx";

type Intent = "success" | "warning" | "danger" | "info" | "gray";
type Variant = "default" | "withMessage";

const defaultVariant = "default";
const VariantContext = React.createContext<Variant>(defaultVariant);

interface FlagProps {
  withMessage?: boolean,
}

const FlagRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FlagProps
>(({className, withMessage, ...props}, ref) => {
  const variant = withMessage ? "withMessage" : "default";
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return (
    <VariantContext.Provider value={variant}>
      <div
        ref={ref}
        className={cn(chosenTheme.root, className)}
        {...props}
      />
    </VariantContext.Provider>
  )
});

const FlagIconContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const variant = React.useContext(VariantContext);
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return (
    <div
      ref={ref}
      className={cn(chosenTheme.icon.parent, className)}
      {...props}
    />
  )
});

interface FlagIconProps {
  className?: string,
  intent?: Intent,
  children?: React.ReactNode,
}

const FlagIcon = ({className, intent = "info", children}: FlagIconProps) => {
  const variant = React.useContext(VariantContext);
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return cloneElement(
    children as React.ReactElement,
    cn(chosenTheme.icon[intent], className)
  );
};

interface FlagTitleProps {
  className?: string,
  intent?: Intent,
}

const FlagTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & FlagTitleProps
>(({className, intent = "info", ...props}, ref) => {
  const variant = React.useContext(VariantContext);
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return (
    <h6
      ref={ref}
      className={cn(chosenTheme.title[intent], className)}
      {...props}
    />
  )
});

const FlagContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(theme.content, className)}
    {...props}
  />
));

const FlagLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({className, ...props}, ref) => {
  const variant = React.useContext(VariantContext);
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return (
    <a
      ref={ref}
      className={cn(chosenTheme.link, className)}
      {...props}
    />
  )
});

const FLagMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => (
  <p
    ref={ref}
    className={cn(theme.message, className)}
    {...props}
  />
));

const FlagActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
  const variant = React.useContext(VariantContext);
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return (
    <div
      ref={ref}
      className={cn(chosenTheme.actions, className)}
      {...props}
    />
  )
});

interface FlagCloseButtonProps {
  children?: React.ReactNode,
}

const FlagCloseButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & FlagCloseButtonProps
>(({className, children, ...props}, ref) => {
  const variant = React.useContext(VariantContext);
  const chosenTheme = variant === "default" ? defaultTheme : theme;
  return (
    <button
      ref={ref}
      className={cn(chosenTheme.close.button, className)}
      {...props}
    >
      {cloneElement(
        children as React.ReactElement,
        chosenTheme.close.icon
      )}
    </button>
  )
});

const Flag = {
  Root: FlagRoot,
  IconContainer: FlagIconContainer,
  Icon: FlagIcon,
  Title: FlagTitle,
  Content: FlagContent,
  Link: FlagLink,
  Message: FLagMessage,
  Actions: FlagActions,
  CloseButton: FlagCloseButton,
};

export default Flag;

export {
  FlagRoot,
  FlagIconContainer,
  FlagIcon,
  FlagTitle,
  FlagContent,
  FlagLink,
  FLagMessage,
  FlagActions,
  FlagCloseButton,
}