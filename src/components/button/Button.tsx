import {button as buttonTheme} from "@tailus/themer-button"

const ButtonUI = () => (
    <button className={buttonTheme.base + " " + buttonTheme.colors.primary + " " + buttonTheme.size.sm}>
        <span className={buttonTheme.label}>Button</span>
    </button>
);

export default ButtonUI;