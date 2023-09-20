import * as Switch from "@radix-ui/react-switch";
import { switchTheme } from "@tailus/themer-switch";

const SwitchUI = () => (
    <form>
        <div className={switchTheme.parentElement}>
            <Switch.Root className={switchTheme.root} id="airplane-mode">
                <Switch.Thumb className={switchTheme.thumb} />
            </Switch.Root>
            <label className={switchTheme.label} htmlFor="airplane-mode">
                Airplane mode
            </label>
        </div>
    </form>
);

export default SwitchUI;
