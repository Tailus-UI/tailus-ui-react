import { emptyState } from "@tailus/themer-empty-state"
import { outlinedButton } from "@tailus/themer-button"

const EmptyStateUI = () => (
    <div className={emptyState.root}>
        <div className={emptyState.imageContainer.gray}>
            <img className={emptyState.image} src="https://cdn-icons-png.flaticon.com/512/9841/9841563.png" alt="Tailus disconnected user empty state" width={512} height={512} />
        </div>
        <div className={emptyState.content}>
            <h3 className={emptyState.title}>You're offline</h3>
            <p className={emptyState.description}>We've got something for everyone.</p>
        </div>
        <button className={outlinedButton.info.md}>
            <span>Refresh</span>
        </button>
    </div>
);

export default EmptyStateUI;