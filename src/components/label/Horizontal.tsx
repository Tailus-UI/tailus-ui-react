import * as Label from "@radix-ui/react-label";
import { outlinedForm as form } from "@tailus/themer-form";

const LabelHorizontal = () => (
    <div className="flex items-center gap-4">
        <Label.Root className={form.label.md} htmlFor="firstName">
            First name
        </Label.Root>
        <div className="">
            <input className={form.input.md} name="firstName" id="firstName" defaultValue="Méschac Irung" type="text" />
        </div>
    </div>
);

export default LabelHorizontal;
