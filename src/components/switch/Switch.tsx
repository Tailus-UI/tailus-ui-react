import * as Switch from "@radix-ui/react-switch";
import React, { useContext } from "react";
import {switchTheme, fancySwitch, type SwitchProps} from "@tailus/themer";

type SwitchVariantsProps = SwitchProps & {
  fancy?: boolean;
}
const SwitchContext = React.createContext<SwitchVariantsProps>({intent:"primary"})
// Creating a container for the Switch component
// This container is a div that takes all props of a standard div
// and passes them to the actual div. Additionally, it merges passed class names
// with those of the switch theme.
const SwitchContainer = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({className, ...props}, forwardedRef) => (
  <div className="flex gap-3" {...props} ref={forwardedRef}/>
));

// Creating the root component of the Switch
// This component is based on the Root component from @radix-ui/react-switch
// It merges passed class names with those of the switch theme.
const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof Switch.Root>,
  React.ComponentPropsWithoutRef<typeof Switch.Root> & SwitchVariantsProps
  >(({ className, intent, fancy, ...props }, forwardedRef) => {
    const { root } = fancy ? fancySwitch({intent}) : switchTheme({intent});
    return (
      <SwitchContext.Provider value={{ intent }}>
        <Switch.Root className={root({intent, className })} {...props} ref={forwardedRef} />
      </SwitchContext.Provider>
    )
  });

// Creating the Thumb component of the Switch
// This component is based on the Thumb component from @radix-ui/react-switch
// It merges passed class names with those of the switch theme.
const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof Switch.Thumb>,
  React.ComponentPropsWithoutRef<typeof Switch.Thumb> & SwitchProps
  >(({ className, ...props }, forwardedRef) => {
    const { intent } = useContext(SwitchContext)
    const { thumb } = switchTheme({ intent });
    return (
      <Switch.Thumb className={thumb({intent, className })} {...props} ref={forwardedRef} />
    )
  });

// Creating the Label component of the Switch
// This component is a standard label that takes all props of a standard label
// and passes them to the actual label. Additionally, it merges passed class names
// with those of the switch theme.
const SwitchLabel = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({className, ...props}, forwardedRef) => (
  <label className={""} {...props} ref={forwardedRef}/>
));

// Exporting components
export {
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  SwitchLabel,
};

export default {
  Container: SwitchContainer,
  Root: SwitchRoot,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
}