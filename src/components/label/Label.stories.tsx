import {FormInput as Input} from "../form";
import Label from "./Label.tsx";

const LabelUI = () => (
    <div className="space-y-2">
        <Label htmlFor="firstName">First name</Label>
        <Input
            type={"text"}
            variant={"soft"}
            size={"md"}
            name={"firstName"}
            id={"firstName"}
            defaultValue={"Théo Balick"}
        />
    </div>
    );

export default {
    component: LabelUI,
};

export const Label_ = () => <LabelUI />;

export const Horizontal = () => (
    <div className="flex items-center gap-4">
        <Label htmlFor="firstName" className="whitespace-nowrap">First name</Label>
        <Input
            type={"text"}
            variant={"soft"}
            size={"md"}
            name={"firstName"}
            id={"firstName"}
            defaultValue={"Meschack Irung"}
        />
    </div>
);