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

export const Icon: React.FC<IconProps> = (({
  className,
  children,
  size = "md",
  type = "leading"
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
}, forwardedRef) => {
  return (
    <span className={className} {...props} ref={forwardedRef}>{children}</span>
  )
})

export const Root = React.forwardRef<
  HTMLButtonElement & HTMLAnchorElement, ButtonProps
  >((
    {
      className,
      intent = "primary",
      variant = "solid",
      size = "md",
      disabled,
      href,
      children,
      ...props
    }, forwardedRef) => {

      const Component = href ? 'a' : 'button';
      const iconOnly = React.Children.toArray(children).some(child => 
          React.isValidElement(child) && child.type === Icon && child.props.type === 'only'
      );
      const buttonSize = iconOnly ? 'iconOnlyButtonSize' : 'size';

      return (
        <Component ref={forwardedRef} href={href} className={button[variant as keyof typeof button]({intent, [buttonSize]:size, className})} {...props} disabled={disabled}>
          {children}
        </Component>
      )
    });

Root.displayName = 'Root';
Icon.displayName = "Icon";
Label.displayName = "Label";

export default {
  Root: Root,
  Icon: Icon,
  Label: Label
}