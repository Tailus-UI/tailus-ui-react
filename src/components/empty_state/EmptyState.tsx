import {emptyState} from "@tailus/themer-empty-state"
import React from "react";

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