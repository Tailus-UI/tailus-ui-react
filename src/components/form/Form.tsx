import * as Form from "@radix-ui/react-form";
import { outlinedForm as theme } from "@tailus/themer-form";
import { button } from "@tailus/themer-button";
import {card as cardTheme} from "@tailus/themer-card";

const FormUI = () => (
    <Form.Root className={cardTheme}>
        <div className="space-y-4">
            <Form.Field className={theme.field} name="email">
                <Form.Label className={theme.label.sm}>Email</Form.Label>
                <div className="space-y-1">
                    <Form.Control asChild>
                        <input className={theme.input.sm} type="email" required />
                    </Form.Control>
                    <Form.Message className={theme.message.warning} match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className={theme.message.danger} match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </div>
            </Form.Field>
            <Form.Field className={theme.field} name="question">
                <Form.Label className={theme.label.sm}>Question</Form.Label>
                <div>
                    <Form.Control asChild>
                        <textarea className={theme.textarea.sm} rows={3} required />
                    </Form.Control>
                    <Form.Message className={theme.message.warning} match="valueMissing">
                        Please enter a question
                    </Form.Message>
                </div>
            </Form.Field>
            <Form.Submit asChild>
                <button className={button.primary.md + " w-full"}>
                    <span>Submit</span>
                </button>
            </Form.Submit>
        </div>
    </Form.Root>
);

export default FormUI;
