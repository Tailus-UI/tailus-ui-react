import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import {select as selectTheme} from "@tailus/themer-select"

const theme = {
    trigger: "inline-flex items-center justify-between h-10 gap-2 min-w-[10rem] w-auto rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 ring-0 transition duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10 focus:ring-offset-white dark:border-gray-800 dark:text-white dark:focus:border-white/60 dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900",
};

const SelectUI = () => (
    <Select.Root>
        <Select.Trigger className={theme.trigger} aria-label="Food">
            <Select.Value placeholder="Select a fruit…" />
            <Select.Icon>
                <ChevronDownIcon className={selectTheme.triggerIcon} />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content className={selectTheme.content}>
                <Select.ScrollUpButton className={selectTheme.scrollButton}>
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className={selectTheme.viewport}>
                    <Select.Group>
                        <Select.Label className={selectTheme.label}>Fruits</Select.Label>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </Select.Group>

                    <Select.Separator className={selectTheme.separator} />

                    <Select.Group>
                        <Select.Label className={selectTheme.label}>Vegetables</Select.Label>
                        <SelectItem value="aubergine">Aubergine</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="carrot" disabled>
                            Carrot
                        </SelectItem>
                        <SelectItem value="courgette">Courgette</SelectItem>
                        <SelectItem value="leek">Leek</SelectItem>
                    </Select.Group>
                    
                    <Select.Separator className={selectTheme.separator} />

                    <Select.Group>
                        <Select.Label className={selectTheme.label}>Meat</Select.Label>
                        <SelectItem value="beef">Beef</SelectItem>
                        <SelectItem value="chicken">Chicken</SelectItem>
                        <SelectItem value="lamb">Lamb</SelectItem>
                        <SelectItem value="pork">Pork</SelectItem>
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className={selectTheme.scrollButton}>
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
    return (
        <Select.Item className={classnames(selectTheme.item, className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className={selectTheme.itemIndicator}>
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default SelectUI;
