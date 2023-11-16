import React, {useContext} from "react";
import {cloneElement, cn} from "../../lib/utils";
import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"
import {ToggleIconProps} from "./interface.ts";
import {AppearanceContext as Context} from "./context.ts";

const ToggleIcon = ({className, children}: ToggleIconProps) => {
  const {variant, size} = useContext(Context);
  const variantClassNames = variant === 'default'
    ? defaultTheme.icon[size]
    : highlightTheme.icon[size];

  return cloneElement(children as React.ReactElement, cn(variantClassNames, className));
};

export default ToggleIcon;