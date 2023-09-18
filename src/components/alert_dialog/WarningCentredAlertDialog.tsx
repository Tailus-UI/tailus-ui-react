import { centredAlertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog"
import { button as solidButton, ghostButton, softIconButton } from "@tailus/themer-button"
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const WarningCentredAlertDialog = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className={softIconButton.warning.md}>
                <span className="sr-only">Archive</span>
                <svg className={softIconButton.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className={alertDialogTheme.overlay} />
            <AlertDialog.Content className={alertDialogTheme.content}>
                <div className={alertDialogTheme.imageContainer.warning}>
                    <img className={alertDialogTheme.image} src="https://cdn-icons-png.flaticon.com/128/3071/3071749.png" alt="" />
                </div>
                <AlertDialog.Title className={alertDialogTheme.title}>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description className={alertDialogTheme.description}>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialog.Description>
                <div className={alertDialogTheme.actions}>
                    <AlertDialog.Cancel asChild>
                        <button className={ghostButton.gray.md}>
                            <span>Cancel</span>
                        </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button className={solidButton.warning.md}>
                            <span>Archive</span>
                        </button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default WarningCentredAlertDialog;
