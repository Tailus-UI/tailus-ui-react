import { emptyState } from "@tailus/themer-empty-state"
import { outlinedButton as buttonTheme } from "@tailus/themer-button"

const EmptyState3 = () => (
    <div className={emptyState.root}>
        <div className={emptyState.imageContainer.gray}>
            <img className={emptyState.image} src="https://cdn-icons-png.flaticon.com/512/9841/9841564.png" alt="Tailus disconnected user empty state" width={512} height={512} />
        </div>
        <div className={emptyState.content}>
            <h3 className={emptyState.title}>No content found</h3>
            <p className={emptyState.description}>We've got something for everyone.</p>
        </div>
        <button className={buttonTheme.primary.md}>
            <span>Discover</span>
        </button>
    </div>
);

export default EmptyState3;