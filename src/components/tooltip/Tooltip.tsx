import * as Tooltip from "@radix-ui/react-tooltip";
import { tooltip as theme } from "@tailus/themer-tooltip";
import { ArchiveIcon } from "@radix-ui/react-icons";
import { iconButton as buttonTheme } from "@tailus/themer-button";

const TooltipUI = () => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <button className={buttonTheme.warning.md}>
                        <span className="sr-only">Archive</span>
                        <ArchiveIcon className={buttonTheme.icon.md}  aria-hidden/>
                    </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={theme.content} sideOffset={4}>
                        Archive
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default TooltipUI;
