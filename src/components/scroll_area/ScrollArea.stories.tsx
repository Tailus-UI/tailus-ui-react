import ScrollAreaUI from "./ScrollArea";
import VerticalScrollArea from "./VerticalScrollArea";

export default {
    component: ScrollAreaUI,
    tags: ['autodocs'],
}

export const ScrollArea = () => (
    <div className="flex aspect-video h-full w-full max-w-3xl items-center rounded-2xl border border-gray-200 py-1 dark:border-white/10">
        <ScrollAreaUI />
    </div>
);

export const Vertical = () => (
    <div className="flex aspect-video h-full w-[48rem] max-w-3xl items-center rounded-2xl border border-gray-200 py-1 dark:border-white/10">
        <VerticalScrollArea />
    </div>
)
