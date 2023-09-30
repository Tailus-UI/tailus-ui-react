import * as Avatar from '@radix-ui/react-avatar';
import { softFallbackAvatar as avatarTheme } from "@tailus/themer-avatar";

const AvatarSolidFallback = () => (
  <div className="flex gap-5">
        <Avatar.Root className={avatarTheme.root.lg}>
            <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=1380&t=st=1691740182~exp=1691740782~hmac=e50e97f129aa3acdb02fb0e8081af49a2a0ea29517c11a558f7fae2da0ef6ea8"
                alt="Shekinah Tshiokufila"
            />
        <Avatar.Fallback
                className={avatarTheme.fallback.danger}
                delayMs={600}
        >
            ST
        </Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className={avatarTheme.root.lg}>
        <Avatar.Fallback
            className={avatarTheme.fallback.accent}
        >
            ST
        </Avatar.Fallback>
        </Avatar.Root>
  </div>
);

export default AvatarSolidFallback;