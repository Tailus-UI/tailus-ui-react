import { flagWithMessage as flagTheme } from "@tailus/themer-flag"

const FlagWithMessage = () => (
    <div className={flagTheme.root} aria-label="Error flag" aria-describedby="error-flag-description-2" role="alert" >
        <div className={flagTheme.icon.parent}>
            <svg className={flagTheme.icon.info} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
        </div>
        <div className={flagTheme.content}>
            <h6 className={flagTheme.title.info}>New update available</h6>
            <p id="error-flag-description-2" className={flagTheme.message}>
                Radix UI support, Modern UI, Customization...
            </p>
            <div className={flagTheme.actions}>
                <a href="#" className={flagTheme.link}>
                    Learn more
                </a>
                <a href="#" className={flagTheme.link}>
                    Upgrade now
                </a>
            </div>
        </div>
        <button className={flagTheme.close.button}>
            <span className="sr-only">Dismiss alert</span>
            <svg className={flagTheme.close.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
)

export default FlagWithMessage;