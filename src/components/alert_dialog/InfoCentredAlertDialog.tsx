import { centredAlertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog"
import { button as solidButton, ghostButton, softIconButton } from "@tailus/themer-button"
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const InfoCentredAlertDialog = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className={softIconButton.info.md}>
                <span className="sr-only">Restore</span>
                <svg className={softIconButton.icon.md} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C7.478 0 6.94 0.184 6.562 0.563C6.185 0.94 6 1.478 6 2V3H0V5H1V21C1 22.645 2.355 24 4 24H16C17.645 24 19 22.645 19 21V5H20V3H14V2C14 1.478 13.816 0.94 13.437 0.562C13.06 0.186 12.523 0 12 0H8ZM8 2H12V3H8V2ZM3 5H17V21C17 21.555 16.555 22 16 22H4C3.445 22 3 21.555 3 21V5ZM10 8L6 12H9V19H11V12H14L10 8Z" fill="currentColor" />
                </svg>
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className={alertDialogTheme.overlay} />
            <AlertDialog.Content className={alertDialogTheme.content}>
                <div className={alertDialogTheme.imageContainer.info}>
                    <img className={alertDialogTheme.image} src="https://cdn-icons-png.flaticon.com/512/7042/7042615.png" alt="" />
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
                        <button className={solidButton.info.md}>
                            <span>Restore</span>
                        </button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default InfoCentredAlertDialog;
