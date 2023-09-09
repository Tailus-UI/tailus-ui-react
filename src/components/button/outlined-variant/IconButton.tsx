import {outlinedIconButton as buttonTheme} from "@tailus/themer-button"

const OutlinedIconButton = () => (
    <button className={buttonTheme.base + " " + buttonTheme.colors.primary + " " + buttonTheme.size.sm}>
        <span className="sr-only">Boost button</span>
        <svg className={buttonTheme.icon.sm} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
    </button>
);

export default OutlinedIconButton;