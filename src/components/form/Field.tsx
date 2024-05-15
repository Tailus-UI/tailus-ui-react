import { Field } from "@radix-ui/react-form";
import React from "react";
import { createContext } from "react";
import {
    form,
    type LabelProps,
} from "@tailus/themer"

export interface FormFieldProps extends LabelProps {
  className?: string;
}

export const FormContext = createContext<LabelProps>({});

const FormField = React.forwardRef<
    React.ElementRef<typeof Field>,
    React.ComponentPropsWithoutRef<typeof Field> & FormFieldProps
  >(({ className, size="md", floating, asTextarea, name, variant="mixed", ...props }, forwardedRef) => {

    const { field } = form();
    
    return (
      <FormContext.Provider value={{ size, variant, asTextarea, floating }}>
        <Field
          ref={forwardedRef}
          name={name}
          className={field({size, variant, className})}
          {...props}
        />
      </FormContext.Provider>
    )
  });

export default FormField;