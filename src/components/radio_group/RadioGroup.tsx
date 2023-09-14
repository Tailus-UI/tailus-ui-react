import * as RadioGroup from "@radix-ui/react-radio-group";
import { radioGroup as radioTheme } from "@tailus/themer-radio-group"

const RadioGroupUI = () => (
    <form>
        <RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="problem" aria-label="View density">
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="understanding" id="rr1">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="rr1">
                    Easy to understand
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="problem" id="rr2">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="rr2">
                    Solved my problem
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="other" id="rr3">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="rr3">
                    Other
                </label>
            </div>
        </RadioGroup.Root>
    </form>
);

export default RadioGroupUI;
