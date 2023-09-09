import {softButton as buttonTheme} from "@tailus/themer-button"

const SoftButton = () => (
    <button className={buttonTheme.base + " " + buttonTheme.colors.primary + " " + buttonTheme.size.sm}>
        <span className={buttonTheme.label}>Button</span>
    </button>
);

export default SoftButton;