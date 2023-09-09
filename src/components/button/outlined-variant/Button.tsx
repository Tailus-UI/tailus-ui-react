import {outlinedButton as buttonTheme} from "@tailus/themer-button"

const OutlinedButtonUI = () => (
    <button className={buttonTheme.base + " " + buttonTheme.colors.primary + " " + buttonTheme.size.sm}>
        <span className={buttonTheme.label}>Button</span>
    </button>
);

export default OutlinedButtonUI;