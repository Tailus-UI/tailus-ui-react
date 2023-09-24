import * as Label from "@radix-ui/react-label";
import { outlinedForm as form } from "@tailus/themer-form";

const LabelUI = () => (
    <div className="space-y-2">
        <Label.Root className={form.label.sm} htmlFor="firstName">
            First name
        </Label.Root>
        <input className={form.input.md} name="firstName" id="firstName" defaultValue="Méschac Irung" type="text" />
    </div>
);

export default LabelUI;
