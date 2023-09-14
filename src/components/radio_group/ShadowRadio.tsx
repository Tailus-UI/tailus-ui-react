import * as RadioGroup from "@radix-ui/react-radio-group";
import { shadowVariant as radioTheme } from "@tailus/themer-radio-group"

const RadioGroupShadowVariant = () => (
    <form>
        <RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="understanding" aria-label="View density">
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="understanding" id="srr1">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="srr1">
                    Easy to understand
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="problem" id="srr2">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="srr2">
                    Solved my problem
                </label>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item className={radioTheme.item} value="other" id="srr3">
                    <RadioGroup.Indicator className={radioTheme.indicator} />
                </RadioGroup.Item>
                <label className={radioTheme.label} htmlFor="srr3">
                    Other
                </label>
            </div>
        </RadioGroup.Root>
    </form>
);

export default RadioGroupShadowVariant;
