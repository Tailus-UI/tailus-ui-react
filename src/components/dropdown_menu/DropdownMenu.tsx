import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Pencil1Icon, ArchiveIcon, TrashIcon, FileIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { dropdownMenu as theme } from "@tailus/themer-dropdown-menu";
import { ghostIconButton as buttonTheme } from "@tailus/themer-button";

const DropdownMenuUI = () => {
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
                        <Pencil1Icon className={theme.icon} />
                        Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={theme.item.primary}>
                        <FileIcon className={theme.icon} />
                        Duplicate
                    </DropdownMenu.Item>
                        <DropdownMenu.Separator className={theme.separator} />
                    <DropdownMenu.Item className={theme.item.primary} disabled>
                        <ArchiveIcon className={theme.icon} />
                        Archive
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={theme.item.danger}>
                        <TrashIcon className={theme.icon} />
                        Delete
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuUI;