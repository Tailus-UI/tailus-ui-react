import { Meta } from "@storybook/react";
import { FormInput as Input } from "../form";
import Label from "./Label.tsx";
import { form } from "@tailus/themer"

type LabelUIProps = {
    size: "sm" | "md" | "lg" | "xl"; 
    disabled? : boolean
};

const { field } = form()

export const LabelUI = ({size, disabled}:LabelUIProps) => (
    <div className={field({size:"md", class:"space-y-3"})}>
        <Label htmlFor="firstName" size={size}>First name</Label>
        <Input
            type="text"
            size="lg"
            variant="mixed"
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
    <div className={field({size:"md", class:"w-full flex items-center gap-3"})}>
        <Label htmlFor="firstName2" size={size} className="text-nowrap">First name</Label>
        <Input
            type="text"
            size="lg"
            variant="outlined"
            name="firstName2"
            id="firstName2"
            defaultValue="Théo Balick"
            disabled={disabled}
        />
    </div>
);