import {clsx, ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cloneElement(element: React.ReactElement, classNames: string) {
  return React.cloneElement(element, {
    className: cn(element.props.className, classNames)
  });
}