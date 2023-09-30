import * as Checkbox from "@radix-ui/react-checkbox";
import {checkbox as checkboxTheme} from "@tailus/themer-checkbox";

const CheckboxUI = () => (
    <div className="flex items-center">
        <Checkbox.Root className={checkboxTheme.root} defaultChecked id="c1">
            <Checkbox.Indicator className={checkboxTheme.indicator}>
                <svg className="h-2.5 w-2.5" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.909L4.364 6.54499L13.091 15.272L28.364 -0.00100708L32.728 4.36299L13.092 23.999L0 10.909Z" fill="currentColor" />
                </svg>
            </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={checkboxTheme.label} htmlFor="c1">
            Keep me signed in
        </label>
    </div>
);

export default CheckboxUI;
