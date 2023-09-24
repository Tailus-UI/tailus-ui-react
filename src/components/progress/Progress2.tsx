import React from "react";
import * as Progress from "@radix-ui/react-progress";
import { progress as theme } from "@tailus/themer-progress";

const ProgressExample2= () => {
    const [progress, setProgress] = React.useState(50);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(94), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={theme.header}>
                <div className={theme.label}>94% of storage used</div>
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
                <Progress.Indicator className={theme.indicator.danger} style={{ transform: `translateX(-${100 - progress}%)` }} />
            </Progress.Root>
            <span className={theme.message}>14.11 GB of 15 GB used</span>
        </div>
    );
};

export default ProgressExample2;
