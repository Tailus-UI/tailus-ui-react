import {emptyState} from "@tailus/themer-empty-state"
import React from "react";

type Intent = "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "info" | "gray";

const EmptyStateRoot = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div ref={ref} className={emptyState.root} {...props} />
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