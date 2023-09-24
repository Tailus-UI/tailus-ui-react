import * as Form from "@radix-ui/react-form";
import { softForm as theme } from "@tailus/themer-form";
import { button } from "@tailus/themer-button";
import {card as cardTheme} from "@tailus/themer-card";

const FormWithoutLabel = () => (
    <Form.Root className={cardTheme}>
        <div className="space-y-4">
            <Form.Field className={theme.field} name="email">
                <div className="space-y-1">
                    <Form.Control asChild>
                        <input className={theme.input.sm} type="email" placeholder="Your email" required />
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
                <div className="space-y-1">
                    <Form.Control asChild>
                        <textarea className={theme.textarea.sm} placeholder="Your message here..." rows={3} required />
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

export default FormWithoutLabel;
