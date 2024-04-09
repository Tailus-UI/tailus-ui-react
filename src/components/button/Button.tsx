import React from "react";
import { cloneElement } from "../../lib/utils";
import { button, buttonIcon as icon, type ButtonProps as ButtonVariantsProps, type ButtonIconProps } from "@tailus/themer"

export type Root = typeof Root;
export type Icon = typeof Icon;
export type Label = typeof Label;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, ButtonVariantsProps {
  disabled?: boolean;
  href?: string;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement>, ButtonIconProps{}

export const Icon = React.forwardRef<HTMLElement, IconProps>(({
  className,
  children,
  size,
  type
}) => {
  return (
    <>
      {
        cloneElement(children as React.ReactElement, icon({size, type, className}))
      }
    </>
  )
})

export const Label = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({
  className,
  children,
  ...props
}) => {
  return (
    <span className={className} {...props}>{children}</span>
  )
})

export const Root = React.forwardRef<
  HTMLButtonElement & HTMLAnchorElement, ButtonProps
  >((
    {
      className,
      intent,
      variant,
      size,
      disabled,
      href,
      children,
      ...props
    }, ref) => {

      const Component = href ? 'a' : 'button';
      const iconOnly = React.Children.toArray(children).some(child => 
          React.isValidElement(child) && child.type === Icon && child.props.type === 'only'
      );
      const buttonSize = iconOnly ? 'iconOnlyButtonSize' : 'size';

      return (
        <Component href={href} className={button[variant as keyof typeof button]({intent, [buttonSize]:size, className})} {...props} disabled={disabled} ref={ref as any}>
          {children}
        </Component>
      )
    });

Root.displayName = 'Root';
Icon.displayName = "Icon";
Label.displayName = "Label";

Root.defaultProps = {
  variant: "solid",
  intent: "neutral",
  size: "md",
}

Icon.defaultProps = {
  size: "md",
  type: "only"
}

export default {
  Root: Root,
  Icon: Icon,
  Label: Label
}