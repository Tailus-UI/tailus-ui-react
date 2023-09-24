import React from "react";
import * as Progress from "@radix-ui/react-progress";
import {progress as theme} from "@tailus/themer-progress";

const ProgressUI = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(32), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress.Root
            className={theme.root + " w-64"}
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: "translateZ(0)",
            }}
            value={progress}
        >
            <Progress.Indicator className={theme.indicator.primary} style={{ transform: `translateX(-${100 - progress}%)` }} />
        </Progress.Root>
    );
};

export default ProgressUI;
