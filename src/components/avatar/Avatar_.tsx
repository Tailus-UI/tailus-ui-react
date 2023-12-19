import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';
import {
    avatar as solidTheme,
    softFallbackAvatar as softTheme
} from "@tailus/themer-avatar";
import React from "react";

const variants = {
    soft: softTheme,
    solid: solidTheme
};

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarRootProps {
    isSoft?: boolean,
    size?: Size
}

const AvatarRoot = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarRootProps
>(({className,...props}, ref) => {
    const { isSoft, size } = props;
    const defaultSize = "md";
    const variant = isSoft ? "soft" : "solid";
    return (
        <AvatarPrimitive.Root
            {...props}
            ref={ref}
            className={cn(variants[variant].root[size || defaultSize], className)}
        />
    );
});

const Avatar = {
    Root: AvatarRoot,
}

export default Avatar;

export {
    AvatarRoot,
}