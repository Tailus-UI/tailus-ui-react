import {
  FormRoot,
  FormControl,
  FormField,
  FormInput,
  FormLabel,
    FormMessage,
  FormTextArea
} from "./";
import { Meta, StoryObj } from "@storybook/react";

type FormUIProps = {
    variant: "soft" | "outlined" | "mixed" | "bottomOutlined" | "plain";
    floatness: boolean;
    size: "sm" | "md" | "lg" | "xl";
    labelSize: "sm" | "md" | "lg";
    messageSize: "xs" | "sm" | "md";
    disabled?: boolean;
    fancy?: boolean;
};

const FormUI = ({ variant, size, fancy, disabled, labelSize, messageSize }: FormUIProps) => (
    <FormRoot className="w-80">
        <FormField name="email" className="w-full space-y-2" size={size}>
            <FormLabel size={labelSize}>Label here</FormLabel>
            <FormControl asChild>
                <FormInput
                    variant={variant}
                    size={size}
                    type="email"
                    disabled={disabled}
                    placeholder="Your placeholder here"
                    fancy={fancy}
                    required
                />
            </FormControl>
            <FormMessage size={messageSize} match="valueMissing">
                Please enter your email
            </FormMessage>
            <FormMessage size={messageSize} match="typeMismatch">
                Please provide a valid email
            </FormMessage>
        </FormField>
    </FormRoot>
);

const Floating = ({ variant, size, disabled }: FormUIProps) => (
    <FormRoot className="w-80">
        <FormField name="email" className="w-full space-y-2.5" floating variant={variant} size={size}>
            <div className="relative">
                <FormControl asChild>
                    <FormInput
                        type="email"
                        disabled={disabled}
                        placeholder=""
                        required
                    />
                </FormControl>
                <FormLabel>Label here</FormLabel>
            </div>
            <FormMessage match="valueMissing">
                Please enter your email
            </FormMessage>
            <FormMessage match="typeMismatch">
                Please provide a valid email
            </FormMessage>
        </FormField>
    </FormRoot>
);

const TextArea = ({ variant, size, disabled }: FormUIProps) => (
    <FormRoot className="w-80">
        <FormField name="message" className="w-full space-y-2" size={size}>
            <FormLabel>Message here</FormLabel>
            <FormControl asChild>
                <FormTextArea
                    variant={variant}
                    size={size}
                    disabled={disabled}
                    rows={3}
                    placeholder="Your placeholder here"
                    required
                />
            </FormControl>
            <FormMessage match="valueMissing">
                Please enter your message
            </FormMessage>
        </FormField>
    </FormRoot>
);

const FloatingTextArea = ({ variant, size, disabled }: FormUIProps) => (
    <FormRoot className="w-80">
        <FormField name="message" className="w-full space-y-2.5" floating asTextarea variant={variant} size={size}>
            <div className="relative">
                <FormControl asChild>
                    <FormTextArea
                        disabled={disabled}
                        rows={3}
                        placeholder=""
                        required
                    />
                </FormControl>
                <FormLabel>Message here</FormLabel>
            </div>
            <FormMessage match="valueMissing">
                Please enter your message
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
            options: ["soft", "outlined", "mixed", "bottomOutlined", "plain"],
            defaultValue: "soft",
        },
        fancy: {
            control: "boolean",
            defaultValue: false,
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            defaultValue: "md",
        },
        labelSize: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            defaultValue: "md",
        },
        messageSize: {
            control: "select",
            options: ["xs", "sm", "md"],
            defaultValue : "sm"
        },
        disabled: {
            control: "boolean",
            defaultValue: false,
        }
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
    },
};

export const FloatingExample: Story = {
    name:"Floating Label",
    args: {
        variant: "outlined",
        size: "md",
        labelSize: "md",
        messageSize : "sm",
    },
    render: Floating
};

export const TextAreaExample: Story = {
    name:"Text Area",
    args: {
        variant: "outlined",
        size: "md",
        labelSize: "md",
        messageSize : "sm",
    },
    render: TextArea
};

export const FloatingTextAreaExample: Story = {
    name:"Floating Text Area",
    args: {
        variant: "outlined",
        size: "md",
        labelSize: "md",
        messageSize : "sm",
    },
    render: FloatingTextArea
};