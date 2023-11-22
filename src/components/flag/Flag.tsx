import {flagWithMessage as theme} from "@tailus/themer-flag"
import {cloneElement, cn} from "../../lib/utils.ts";
import React from "react";

type Intent = "success" | "warning" | "danger" | "info" | "gray";

const FlagRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(theme.root, className)}
    {...props}
  />
));

const FlagIconContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(theme.icon.parent, className)}
    {...props}
  />
));

interface FlagIconProps {
  className?: string,
  intent?: Intent,
  children?: React.ReactNode,
}

const FlagIcon = ({className, intent = "info", children}: FlagIconProps) => {
  return cloneElement(
    children as React.ReactElement,
    cn(theme.icon[intent], className)
  );
};


interface FlagTitleProps {
  className?: string,
  intent?: Intent,
}

const FlagTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & FlagTitleProps
>(({className, intent = "info", ...props}, ref) => (
  <h6
    ref={ref}
    className={cn(theme.title[intent], className)}
    {...props}
  />
));

const Flag = {
  Root: FlagRoot,
  IconContainer: FlagIconContainer,
  Icon: FlagIcon,
  Title: FlagTitle,
};

export default Flag;

export {
  FlagRoot,
  FlagIconContainer,
  FlagIcon,
  FlagTitle,
}