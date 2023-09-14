import ToggleGroupUI from "./ToggleGroup";

export default {
    component: ToggleGroupUI,
    tags: ['autodocs'],
}

export const ToggleGroup = () => (
    <ToggleGroupUI />
);

export const ToggleGroupExample1 = () => (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 py-1 pl-4 pr-1 text-gray-700 dark:border-gray-900 dark:text-gray-300">
        <span>Was this useful ? </span>
        <ToggleGroupUI />
    </div>
);

export const ToggleGroupExample2 = () => (
    <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300">
        <span>Was this useful ? </span>
        <ToggleGroupUI />
    </div>
);