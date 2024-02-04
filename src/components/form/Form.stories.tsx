import {
  FormRoot,
  FormControl,
  FormField,
  FormInput,
  FormLabel,
  FormMessage,
} from "./";
import { Meta, StoryObj } from "@storybook/react";

type FormUIProps = {
    variant: "soft" | "outlined" | "mixed";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    labelSize: "xs" | "sm" | "md" | "lg";
    messageSize: "xs" | "sm" | "md" | "lg";
    withLabel?: boolean;
    WithPlaceholder?: boolean;
    message: 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'gray' | 'info' | 'success'; 
    disabled? : boolean
};

const FormUI = ({ variant, size, withLabel, WithPlaceholder, message, disabled, labelSize, messageSize }: FormUIProps) => (
    <FormRoot className="w-72">
        <FormField name="email" className="w-full">
            {withLabel && <FormLabel size={labelSize}>Email</FormLabel>}
            <FormControl asChild>
                <FormInput
                    variant={variant}
                    size={size}
                    type="email"
                    disabled={disabled}
                    placeholder={WithPlaceholder ? "Your email" : undefined}
                    required
                />
            </FormControl>
            <FormMessage size={messageSize} intent={message}>
                Helper message
            </FormMessage>
            <FormMessage size={messageSize} intent={message} match="valueMissing">
                Please enter your email
            </FormMessage>
            <FormMessage size={messageSize} match="typeMismatch">
                Please provide a valid email
            </FormMessage>
        </FormField>
    </FormRoot>
);

const meta:Meta<typeof FormUI> = {
    title: "Form",
    component: FormUI,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "A customizable form component built with Radix UI primitives.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["soft", "outlined", "mixed"],
            defaultValue: "soft",
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
            defaultValue: "md",
        },
        labelSize: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
            defaultValue: "md",
        },
        messageSize: {
            control: "select",
            options: ["xs", "sm", "md", "lg"],
            defaultValue : "md"
        },
        withLabel: {
            control: "boolean",
            defaultValue: true,
        },
        WithPlaceholder: {
            control: "boolean",
            defaultValue: false,
        },
        disabled: {
            control: "boolean",
            defaultValue: false,
        },
        message: {
            control: "select",
            options: ["primary", "secondary", "accent", "danger", "warning", "gray", "info", "success"],
            defaultValue: "warning",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
    args: {
        variant: "outlined",
        size: "md",
        labelSize: "md",
        messageSize : "sm",
        withLabel: true,
        WithPlaceholder: false,
        message: "gray",
    },
};