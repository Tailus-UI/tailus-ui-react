import { Drawer as Primitive } from "vaul"
import React from "react";
import {drawer , type DrawerProps } from "@tailus/themer"

import {
  title,
  text,
  type TitleSizeProp,
  type TextProps,
  type TextSizeProp,
  type TextAlignProp,
  type TextWeightProp
} from "@tailus/themer"


const Trigger = Primitive.Trigger;
const Portal = Primitive.Portal;
const Close = Primitive.Close;
const NestedRoot = Primitive.NestedRoot;

const DirectionContext = React.createContext<Omit<DrawerProps, "fancy" | "mixed">>({ direction: "bottom", withControler:true });

type RootProps = React.ComponentProps<typeof Primitive.Root> & DrawerProps & {
    ref?: React.Ref<React.ElementRef<typeof Primitive.Root>>;
};

const Root: React.FC<RootProps> = ({ direction, withControler, ...props }, forwardedRef) => {
    return (
        <DirectionContext.Provider value={{ direction, withControler }}>
            <Primitive.Root ref={forwardedRef} direction={direction} {...props} />
        </DirectionContext.Provider>
    );
};

const Content = React.forwardRef <
    React.ElementRef < typeof Primitive.Content > ,
    React.ComponentProps < typeof Primitive.Content > & Omit<DrawerProps, "direction"> 
    >(({
        className,
        fancy,
        mixed,
        ...props
    }, forwardedRef) => {

        const { content } = drawer()
        const {direction, withControler} = React.useContext(DirectionContext);

        if (fancy && mixed) {
            throw new Error('The fancy and mixed props cannot be used together.');
        } 

        return (
            <Primitive.Content {...props} ref={forwardedRef}
                className = {content({fancy,mixed,direction,withControler,className})}
            />
        )
    }
);

const Overlay = React.forwardRef<
  React.ElementRef<typeof Primitive.Overlay>,
  React.ComponentProps<typeof Primitive.Overlay>
  >(({ className, ...props }, forwardedRef) => {
    
    const { overlay } = drawer()

    return (
      <Primitive.Overlay
          {...props}
          ref={forwardedRef}
          className={overlay({ className })}
      />
    )
  });

const Title = React.forwardRef<
  React.ElementRef<typeof Primitive.Title>,
  React.ComponentProps<typeof Primitive.Title> & {
    size?: TitleSizeProp,
    align?: TextAlignProp,
    weight?: TextWeightProp
  }
>(({className, size="base", align, weight="medium", ...props}, forwardedRef) => (
  <Primitive.Title
    {...props}
    ref={forwardedRef}
    className={title({ size, align, weight, className })}
  />
));

const Description = React.forwardRef<
  React.ElementRef<typeof Primitive.Description>,
  React.ComponentProps<typeof Primitive.Description> & TextProps & {
    size?: TextSizeProp,
    align?: TextAlignProp,
    weight?: TextWeightProp
  }
>(({className, size, weight, align, neutral, ...props}, forwardedRef) => (
  <Primitive.Description
    {...props}
    ref={forwardedRef}
    className={text({ size, weight, align, neutral, className })}
  />
));

export default {
    Root,
    NestedRoot,
    Trigger,
    Portal,
    Close,
    Content,
    Overlay,
    Title,
    Description,
};

export {
    Root,
    Trigger,
    NestedRoot,
    Portal,
    Close,
    Content,
    Overlay,
    Title,
    Description,
};