import * as Label from "@radix-ui/react-label";
import {outlinedForm as outlinedTheme, softForm, softForm as softTheme} from "@tailus/themer-form";
import React from "react";
import {cn} from "../../lib/utils.ts";

interface LabelRootProps
  extends React.ComponentPropsWithoutRef<typeof Label.Root> {
  variant?: "outlined" | "soft";
}

export const LabelRoot = React.forwardRef<
  React.ElementRef<typeof Label.Root>, LabelRootProps
>(({className, variant = "outlined", ...props}, forwardedRef) => {
  const theme = variant === "outlined" ? outlinedTheme : softTheme;
  return (
    <Label.Root ref={forwardedRef} className={cn(theme.label.sm, className)} {...props} />
  )
});

const LabelUI = () => (
  <div className="space-y-2">
    <LabelRoot htmlFor="firstName">
      First name
    </LabelRoot>
    <input className={softForm.input.md} name="firstName" id="firstName" defaultValue="Méschac Irung" type="text"/>
  </div>
);

export default LabelUI;
