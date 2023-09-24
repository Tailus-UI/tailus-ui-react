import React from "react";
import * as Progress from "@radix-ui/react-progress";
import { ClockIcon } from "@radix-ui/react-icons";
import { progress as theme } from "@tailus/themer-progress";

const GradientProgress = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(54), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={theme.header}>
                <div className={theme.label}>54% Completed</div>
                <span className={theme.timer}>
                    <ClockIcon />
                    <span>46sec</span>
                </span>
            </div>
            <Progress.Root
                className={theme.root + " w-64"}
                style={{
                    // Fix overflow clipping in Safari
                    // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                    transform: "translateZ(0)",
                }}
                value={progress}
            >
                <Progress.Indicator className={theme.indicator.gradient + " from-primary-600 to-secondary-400"} style={{ transform: `translateX(-${100 - progress}%)` }} />
            </Progress.Root>
            <span className={theme.message}>66 files of 124 files uploaded</span>
        </div>
    );
};

export default GradientProgress;
