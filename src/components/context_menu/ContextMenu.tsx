import * as ContextMenu from "@radix-ui/react-context-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import {contextMenu as contextTheme} from "@tailus/themer-context-menu"

const ContextMenuUI = () => {

    return (
        <ContextMenu.Root>
            <div className="-mt-12">
                <span className="text-gray-700 dark:text-gray-300">Right click the logo.</span>

                <ContextMenu.Trigger>
                    <div className="mt-12 mx-auto w-fit rounded-[--menu-border-radius] px-4 py-2 transition duration-300 hover:bg-gray-100 dark:hover:bg-white/5">
                        <img className="w-16 h-16 mx-auto" src="/tls/x512.png" alt="" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">tailus-logo.png</span>
                    </div>
                </ContextMenu.Trigger>
            </div>

            <ContextMenu.Portal>
                <ContextMenu.Content className={contextTheme.content}>
                    <ContextMenu.Item className={contextTheme.item.primary}>
                        Scale <div className={contextTheme.command}>⌘+S</div>
                    </ContextMenu.Item>
                    <ContextMenu.Item className={contextTheme.item.primary}>
                        Set to Primary <div className={contextTheme.command}>⌘+P</div>
                    </ContextMenu.Item>
                    <ContextMenu.Separator className={contextTheme.separator} />
                    <ContextMenu.Item className={contextTheme.item.primary}>Copy </ContextMenu.Item>
                    <ContextMenu.Item className={contextTheme.item.primary}>Share... </ContextMenu.Item>
                    <ContextMenu.Separator className={contextTheme.separator} />
                    <ContextMenu.Sub>
                        <ContextMenu.SubTrigger className={contextTheme.subTriger.primary}>
                            Download
                            <div className={contextTheme.icon}>
                                <ChevronRightIcon />
                            </div>
                        </ContextMenu.SubTrigger>
                        <ContextMenu.Portal>
                            <ContextMenu.SubContent className={contextTheme.subContent} sideOffset={4} alignOffset={-5}>
                                <ContextMenu.Item className={contextTheme.item.primary}>Logomark </ContextMenu.Item>
                                <ContextMenu.Item className={contextTheme.item.primary}>Logotype </ContextMenu.Item>
                                <ContextMenu.Separator className={contextTheme.separator} />

                                <ContextMenu.Item className={contextTheme.item.primary}>All </ContextMenu.Item>
                            </ContextMenu.SubContent>
                        </ContextMenu.Portal>
                    </ContextMenu.Sub>
                    <ContextMenu.Separator className={contextTheme.separator} />
                    <ContextMenu.Item className={contextTheme.item.warning}>
                        Archive <div className={contextTheme.command}>⌘+D</div>
                    </ContextMenu.Item>
                    <ContextMenu.Item className={contextTheme.item.danger}>
                        Delete <div className={contextTheme.command}>⌘+D</div>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    );
};

export default ContextMenuUI;
