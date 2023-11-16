import React, {useContext} from "react";
import {cloneElement, cn} from "../../lib/utils";
import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"
import {AppearanceContext as Context} from "./context.ts";
import {ToggleIconProps} from "./interface.ts";

const ToggleIconBefore = ({className, children}: ToggleIconProps) => {
  const {variant, size} = useContext(Context);
  const variantClassNames = variant === 'default'
    ? defaultTheme.iconBefore[size]
    : highlightTheme.iconBefore[size];

  return cloneElement(
    children as React.ReactElement,
    cn(variantClassNames, className)
  );
};

export default ToggleIconBefore;