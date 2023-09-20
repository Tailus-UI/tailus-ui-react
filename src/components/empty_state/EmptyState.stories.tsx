import EmptyStateUI from "./EmptyState";
import EmptyState2 from "./Example2";
import EmptyState3 from "./Example3";

export default {
    component: EmptyStateUI,
}

export const EmptyState = () => <EmptyStateUI />;
export const Example2 = () => <EmptyState2 />;
export const Example3 = () => <EmptyState3 />;
