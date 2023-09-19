import * as Dialog from "@radix-ui/react-dialog";
import * as Toggle from "@radix-ui/react-toggle";
import { toggle } from "@tailus/themer-toggle";
import RadioGroupUI from "../radio_group/RadioGroup";
import { button as buttonTheme, ghostButton } from "@tailus/themer-button"
import { dialog } from "@tailus/themer-dialog"

const DialogExample2 = () => (
    <Dialog.Root>
        <Dialog.Trigger>
            <Toggle.Root className={toggle.root.md} value="like-2" aria-label="I like it">
                <svg className={toggle.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                <svg className={toggle.iconStateOn.secondary + " " + toggle.iconSize.md} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                </svg>
            </Toggle.Root>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className={dialog.overlay} />
            <Dialog.Content className={dialog.content}>
                <Dialog.Title className={dialog.title}>Sign in to bookmark</Dialog.Title>
                <Dialog.Description className={dialog.description}>You need to be signed in to save your frequently used components.</Dialog.Description>

                <div className={dialog.actions}>
                    <Dialog.Close>
                        <button className={ghostButton.primary.md}>
                            <span>Cancel</span>
                        </button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <button className={buttonTheme.primary.md}>
                            <span>Sign in</span>
                        </button>
                    </Dialog.Close>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default DialogExample2;
