import AlertDialogUI from "./AlertDialog";
import CentredAlertDialog from "./CentredAlertDialog";
import WarningAlertDialog from "./WarningAlertDialog";
import WarningCentredAlertDialog from "./WarningCentredAlertDialog";
import InfoAlertDialog from "./InfoAlertDialog";
import InfoCentredAlertDialog from "./InfoCentredAlertDialog";

export default {
    component: AlertDialogUI,
}

export const AlertDialog = () => (
    <div className="flex gap-4">
        <AlertDialogUI />
        <CentredAlertDialog />
    </div>
);

export const Warning = () => (
    <div className="flex gap-4">
        <WarningAlertDialog />
        <WarningCentredAlertDialog />
    </div>
);

export const Info = () => (
    <div className="flex gap-4">
        <InfoAlertDialog />
        <InfoCentredAlertDialog />
    </div>
);