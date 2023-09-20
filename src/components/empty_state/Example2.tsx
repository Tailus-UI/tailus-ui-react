import { emptyState } from "@tailus/themer-empty-state"
import { outlinedLeadingIconButton as buttonTheme } from "@tailus/themer-button"

const EmptyState2 = () => (
    <div className={emptyState.root}>
        <div className={emptyState.imageContainer.gray}>
            <img className={emptyState.image} src="https://cdn-icons-png.flaticon.com/512/342/342348.png" alt="Tailus disconnected user empty state" width={512} height={512} />
        </div>
        <div className={emptyState.content}>
            <h3 className={emptyState.title}>You don't have any file</h3>
            <p className={emptyState.description}>We've got something for everyone.</p>
        </div>
        <button className={buttonTheme.primary.md}>
             <svg className={buttonTheme.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add</span>
        </button>
    </div>
);

export default EmptyState2;