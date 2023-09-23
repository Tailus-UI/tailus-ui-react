import * as Popover from "@radix-ui/react-popover";
import { InfoCircledIcon, Cross2Icon } from "@radix-ui/react-icons";
import { popover } from "@tailus/themer-popover";
import { ghostIconButton } from "@tailus/themer-button";

const Popover2UI = () => (
    <Popover.Root>
        <Popover.Trigger>
            <button className={ghostIconButton.gray.md}>
                <span className="sr-only">Learn more</span>
                <InfoCircledIcon className={ghostIconButton.icon.md} />
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className={popover.content}>
                <img className="mb-4 w-12 h-12" src="https://cdn-icons-png.flaticon.com/512/3025/3025463.png" alt="Tailus Popover peacer icon" width={512} height={512} />
                <p className={popover.description}>Inventore perspiciatis atque consequatur? Autem reiciendis nemo error, rerum tempora.</p>
                <Popover.Close asChild>
                    <button className={ghostIconButton.gray.md + " !absolute top-1 right-1"}>
                        <span className="sr-only">Dismiss dialog</span>
                        <Cross2Icon className={ghostIconButton.icon.md} aria-hidden/>
                    </button>
                </Popover.Close>
                <Popover.Arrow className={popover.arrow} />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default Popover2UI;
