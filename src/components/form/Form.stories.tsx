import { button } from "@tailus/themer-button";
import {
  FormRoot,
  FormControl,
  FormField,
  FormInput,
  FormLabel,
  FormMessage,
  FormSubmit,
  FormTextArea
} from "./";
import { Meta, StoryObj } from "@storybook/react";

type FormUIProps = {
    variant: "soft" | "outlined";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    withLabel?: boolean;
    WithPlaceholder?: boolean;
    errormessageColor: 'danger' | 'warning' | 'gray'; 
};

const FormUI = ({ variant, size, withLabel, WithPlaceholder, errormessageColor }: FormUIProps) => (
    <FormRoot>
        <div className="space-y-4">
            <FormField name="email">
                {withLabel && <FormLabel>Email</FormLabel>}
                <div className="space-y-1">
                    <FormControl asChild>
                        <FormInput
                          variant={variant}
                          size={size}
                          type="email"
                          placeholder={WithPlaceholder ? "Your email" : undefined}
                          required
                        />
                    </FormControl>
                    <FormMessage intent={errormessageColor} match="valueMissing">
                        Please enter your email
                    </FormMessage>
                    <FormMessage match="typeMismatch">
                        Please provide a valid email
                    </FormMessage>
                </div>
            </FormField>
            <FormField name="question">
                {withLabel && <FormLabel>Question</FormLabel>}
                <div>
                    <FormControl asChild>
                        <FormTextArea
                          variant={variant}
                          size={size}
                          rows={3}
                          placeholder={WithPlaceholder ? "Your message here..." : undefined}
                          required
                        />
                    </FormControl>
                    <FormMessage intent={errormessageColor} match="valueMissing">
                        Please enter a question
                    </FormMessage>
                </div>
            </FormField>
            <FormSubmit asChild>
                <button className={button.primary.md + " w-full"}>
                    <span>Submit</span>
                </button>
            </FormSubmit>
        </div>
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
            options: ["soft", "outlined"],
            defaultValue: "soft",
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
            defaultValue: "md",
        },
        withLabel: {
            control: "boolean",
            defaultValue: true,
        },
        WithPlaceholder: {
            control: "boolean",
            defaultValue: false,
        },
        errormessageColor: {
            control: "select",
            options: ["danger", "warning", "gray"],
            defaultValue: "warning",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
    args: {
        variant: "outlined",
        size: "sm",
        withLabel: true,
        WithPlaceholder: false,
        errormessageColor: "warning",
    },
};