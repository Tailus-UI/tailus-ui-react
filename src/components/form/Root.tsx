import * as Form from "@radix-ui/react-form";
import {card as cardTheme} from "@tailus/themer-card";
import React from "react";

const FormRoot = React.forwardRef<
  HTMLFormElement,
  React.ComponentProps<typeof Form.Root>>(
    (props, forwardedRef) => (
    <Form.Root
      ref={forwardedRef}
      className={cardTheme}
      {...props}
    />
));

export default FormRoot;