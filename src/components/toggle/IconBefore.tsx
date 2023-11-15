import React from "react";
import {cloneElement, cn} from "../../lib/utils";
import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"

interface ToggleIconBeforeProps {
  className?: string,
  variant?: 'default' | 'highlight',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  children: React.ReactNode
}

const ToggleIconBefore = (
  {
    className,
    variant = 'default',
    size = 'md',
    children
  }: ToggleIconBeforeProps
) => {
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconBefore[size]
    : highlightTheme.iconBefore[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

export default ToggleIconBefore;