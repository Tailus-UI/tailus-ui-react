import { Control } from "@radix-ui/react-form";
import React from "react";

const FormControl = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Control>
>((props, forwardedRef) => (
  <Control
    ref={forwardedRef}
    {...props}
  />
));

export default FormControl;
