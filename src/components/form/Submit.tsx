import { Submit } from "@radix-ui/react-form";
import React from "react";

const FormSubmit = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Submit>
>((props, forwardedRef) => (
  <Submit
    ref={forwardedRef}
    {...props}
  />
));

export default FormSubmit;