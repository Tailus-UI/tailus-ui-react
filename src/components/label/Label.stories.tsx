import {Meta} from "@storybook/react";
import {FormInput as Input} from "../form";
import Label from "./Label.tsx";
import { outlinedForm } from "@tailus/themer-form";

type LabelUIProps = {
    size: "xs" | "sm" | "md"; 
    disabled? : boolean
};

export const LabelUI = ({size, disabled}:LabelUIProps) => (
    <div className={outlinedForm.field + " w-72"}>
        <Label htmlFor="firstName" size={size}>First name</Label>
        <Input
            type="text"
            size="md"
            name="firstName"
            id="firstName"
            defaultValue="Théo Balick"
            disabled={disabled}
        />
    </div>
    );

const meta: Meta<typeof LabelUI> = {
    title: 'Label',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'md'],
            },
        },
        disabled: {
            control: 'boolean'
        },
    }
}

export default meta;

export const Horizontal = ({size, disabled}:LabelUIProps) => (
    <div className={outlinedForm.field + " flex space-y-0 gap-4 items-center"}>
        <Label htmlFor="firstName" size={size} className="whitespace-nowrap">First name</Label>
        <Input
            type="text"
            size="md"
            name="firstName"
            id="firstName"
            defaultValue="Meschack Irung"
            disabled={disabled}
        />
    </div>
);