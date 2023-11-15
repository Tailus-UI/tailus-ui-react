import React from "react";
import {cloneElement, cn} from "../../lib/utils";
import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"

interface ToggleIconAfterProps {
  className?: string,
  variant?: 'default' | 'highlight',
  intent?: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  children: React.ReactNode
}

const ToggleIconAfter = (
  {
    className,
    variant = 'default',
    size = 'md',
    intent = 'primary',
    children
  }: ToggleIconAfterProps
) => {
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconAfter[intent][size]
    : highlightTheme.iconAfter[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

export default ToggleIconAfter;