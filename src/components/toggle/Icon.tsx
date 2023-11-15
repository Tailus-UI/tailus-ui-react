import React from "react";
import {cloneElement, cn} from "../../lib/utils";
import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"

export interface ToggleIconProps {
  className?: string,
  variant?: 'default' | 'highlight',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  children: React.ReactNode
}

const ToggleIcon = (
  {
    className,
    variant = 'default',
    size = 'md',
    children
  }: ToggleIconProps
) => {
  const variantClassNames = variant === 'default'
    ? defaultTheme.icon[size]
    : highlightTheme.icon[size];

  return cloneElement(children as React.ReactElement, cn(variantClassNames, className));
};

export default ToggleIcon;