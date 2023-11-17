import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"
import {Root} from "@radix-ui/react-toggle";
import React, {createContext, useContext} from "react";
import {cloneElement, cn} from "../../lib/utils.ts";

export type Appearance = {
  variant: 'default' | 'highlight',
  intent: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const defaultAppearance: Appearance = {
  variant: 'default',
  intent: 'accent',
  size: 'md'
}

export const AppearanceContext = createContext(defaultAppearance);

interface ToggleRootProps {
  className?: string,
  variant?: 'default' | 'highlight',
  intent?: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const ToggleRoot = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & ToggleRootProps
>(({
     className,
     variant = 'default',
     size = 'md',
     intent = 'primary',
     ...props
   },
   forwardedRef
) => {
  const variantClassNames = variant === 'default' ? defaultTheme.root[size] : highlightTheme.root[intent][size];
  return (
    <AppearanceContext.Provider value={{variant: variant, intent: intent, size: size}}>
      <Root
        className={cn(variantClassNames, className)}
        ref={forwardedRef}
        {...props}
      />
    </AppearanceContext.Provider>
  )
});

interface ToggleIconProps {
  className?: string,
  children: React.ReactNode
}

const ToggleIcon = ({className, children}: ToggleIconProps) => {
  const {variant, size} = useContext(AppearanceContext);
  const variantClassNames = variant === 'default'
    ? defaultTheme.icon[size]
    : highlightTheme.icon[size];

  return cloneElement(children as React.ReactElement, cn(variantClassNames, className));
};

const ToggleIconAfter = ({className, children}: ToggleIconProps) => {
  const {variant, intent, size} = useContext(AppearanceContext);
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconAfter[intent][size]
    : highlightTheme.iconAfter[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

const ToggleIconBefore = ({className, children}: ToggleIconProps) => {
  const {variant, size} = useContext(AppearanceContext);
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconBefore[size]
    : highlightTheme.iconBefore[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

export {
    ToggleRoot,
    ToggleIcon,
    ToggleIconAfter,
    ToggleIconBefore
};