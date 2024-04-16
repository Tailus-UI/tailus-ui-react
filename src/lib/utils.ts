import {clsx, ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import React from "react";

/**
 * Tailwind CSS classnames merge.
 * The function resolves conflicting Tailwind CSS classnames and merges them into one
 * @param { string | string[] } inputs - Tailwind CSS classnames
 * @returns { string } - Merged Tailwind CSS classnames
 * @example cn("text-red-500", "text-center", "text-cyan-500") // => "text-center text-cyan-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Clone React element.
 * The function clones React element and adds Tailwind CSS classnames to the cloned element
 * @param element the React element to clone
 * @param classNames Tailwind CSS classnames
 * @returns { React.ReactElement } - Cloned React element
 * @example cloneElement(<div />, "text-center text-cyan-500") // => <div className="text-center text-cyan-500" />
 */
export function cloneElement(element: React.ReactElement, classNames: string) {
  return React.cloneElement(element, {
    className: twMerge(element.props.className, classNames)
  });
}
