import { flag as flagTheme } from "@tailus/themer-flag"

const FlagUI = () => (
    <div className={flagTheme.root} aria-label="Error flag" aria-describedby="error-flag-description" role="alert" >
        <div className={flagTheme.icon.parent}>
            <svg className={flagTheme.icon.success} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
        </div>
        <p className={flagTheme.title.success} id="error-flag-description">
            Update failed !{" "}
            <a href="#" className={flagTheme.link}>
                Learn more
            </a>{" "}
        </p>
        <button className={flagTheme.close.button}>
            <span className="sr-only">Dismiss alert</span>
            <svg className={flagTheme.close.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
)

export default FlagUI;