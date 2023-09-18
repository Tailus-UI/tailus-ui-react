import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Pencil1Icon, ArchiveIcon, TrashIcon, FileIcon, DotsVerticalIcon, DownloadIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { dropdownmenu as theme } from "@tailus/themer-dropdown-menu";
import { ghostIconButton as buttonTheme } from "@tailus/themer-button";

const DropdownMenuSubMenu = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={buttonTheme.gray.md}>
                    <span className="sr-only">Dismiss dialog</span>
                    <DotsVerticalIcon className={buttonTheme.icon.md} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className={theme.content} sideOffset={5}>
                    <DropdownMenu.Item className={theme.item.primary}>
                        <Pencil1Icon className="h-[1.125rem] w-[1.125rem]" />
                        Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={theme.item.primary}>
                        <FileIcon className="h-[1.125rem] w-[1.125rem]" />
                        Duplicate
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className={theme.separator} />
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className={theme.subTriger.primary}>
                            <DownloadIcon className="h-[1.125rem] w-[1.125rem]" />
                            Download
                            <div className={theme.icon}>
                                <ChevronRightIcon />
                            </div>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent className={theme.subContent} sideOffset={4} alignOffset={-5}>
                                <DropdownMenu.Item className={theme.item.primary}>Logomark </DropdownMenu.Item>
                                <DropdownMenu.Item className={theme.item.primary}>Logotype </DropdownMenu.Item>
                                <DropdownMenu.Separator className={theme.separator} />
                                <DropdownMenu.Item className={theme.item.primary}>All </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Item className={theme.item.primary} disabled>
                        <ArchiveIcon className="h-[1.125rem] w-[1.125rem]" />
                        Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={theme.item.danger}>
                        <TrashIcon className="h-[1.125rem] w-[1.125rem]" />
                        Delete
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuSubMenu;
