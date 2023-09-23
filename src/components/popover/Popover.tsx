import * as Popover from "@radix-ui/react-popover";
import { InfoCircledIcon, Cross2Icon } from "@radix-ui/react-icons";
import { popover } from "@tailus/themer-popover";
import { softIconButton, ghostIconButton } from "@tailus/themer-button";

const PopoverUI = () => (
    <Popover.Root>
        <Popover.Trigger>
            <button className={softIconButton.gray.md}>
                <span className="sr-only">Learn more</span>
                <InfoCircledIcon className={softIconButton.icon.md} />
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className={popover.content}>
                <div className={popover.title}>Title</div>
                <p className={popover.description}>Inventore perspiciatis atque consequatur? Autem reiciendis nemo error, rerum tempora.</p>
                <Popover.Close asChild>
                    <button className={ghostIconButton.gray.md + " !absolute top-1 right-1"}>
                        <span className="sr-only">Dismiss dialog</span>
                        <Cross2Icon className={ghostIconButton.icon.md} aria-hidden/>
                    </button>
                </Popover.Close>
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default PopoverUI;
