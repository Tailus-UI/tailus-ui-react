import * as AvatarUI from '@radix-ui/react-avatar';
import { avatar } from "@tailus/themer-avatar";
import { cn } from '../../lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const fallbackMap = {
    solid: avatar.fallback,
    soft: avatar.softFallback,
}

const colorsMap = {
    primary: "primary",
    secondary: "secondary",
    accent: "accent",
    danger: "danger",
    success: "success",
    warning: "warning",
    info: "info",
    gray: "gray",
}

const sizesMap = {
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs",
}

const statusMap = {
    online: "online",
    offline: "offline",
    away: "away",
    busy: "busy",
}

const statusPositionMap = {
    top: avatar.topStatus,
    bottom: avatar.bottomStatus,
}


const avatarVariants = cva([''], {
    variants: {
        fallback: fallbackMap,
        size: sizesMap,
        color: colorsMap,
        status: statusMap,
        statusPosition: statusPositionMap,
    },
    defaultVariants: {
        fallback: 'soft',
        size: 'md',
        color: 'primary',
    }
});

interface AvatarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof avatarVariants> {
    fallback?: "solid" | "soft";
    size?: "lg" | "md" | "sm" | "xs";
    color?: "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "info" | "gray";
    status?: "online" | "offline" | "away" | "busy";
    statusPosition?: "top" | "bottom";
    src: string,
    alt: string,
    initials?: string,
}

export const Avatar: React.FC<AvatarProps> = ({
    className,
    fallback,
    size,
    color,
    status,
    statusPosition,
    src,
    alt,
    initials,
    ...props
}) => {
    const avatarUtilities = cn(avatar.root[size!], statusPosition && statusPositionMap[statusPosition!][status!])
    const fallbackUtilities = fallbackMap[fallback!][color!]
    const avatarRootClasses = cn(avatarUtilities, className);
    const fallbackClasses = cn(fallbackUtilities, className);

    return (
        <AvatarUI.Root className={avatarRootClasses} {...props}>
            <AvatarUI.Image
                className={cn(avatar.image)}
                src={src}
                alt={alt}
            />
            <AvatarUI.Fallback
                className={fallbackClasses}
                {...props}
                delayMs={600}
            >
                {initials?.toUpperCase()}
            </AvatarUI.Fallback>
        </AvatarUI.Root>
    )
};

export default Avatar;