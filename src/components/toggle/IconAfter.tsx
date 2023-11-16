import React, {useContext} from "react";
import {cloneElement, cn} from "../../lib/utils";
import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"
import {AppearanceContext as Context} from "./context.ts";
import {ToggleIconProps} from "./interface.ts";

const ToggleIconAfter = ({className, children}: ToggleIconProps) => {
  const {variant, intent, size} = useContext(Context);
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconAfter[intent][size]
    : highlightTheme.iconAfter[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

export default ToggleIconAfter;