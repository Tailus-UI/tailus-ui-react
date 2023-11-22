import {emptyState} from "@tailus/themer-empty-state"
import React from "react";
import {cn} from "../../lib/utils.ts";

type Intent = "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "info" | "gray";

const EmptyStateRoot = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(emptyState.root, className)}
    {...props}
  />
));

const EmptyState = {
  Root: EmptyStateRoot,
};

export default EmptyState;

export {
  EmptyStateRoot,
}

export type {
  Intent,
}