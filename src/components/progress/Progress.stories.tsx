import ProgressUI from "./Progress";
import GradientProgress from "./Gradient";
import ProgressExample2 from "./Progress2";

export default {
    component: ProgressUI,
};

export const Progress = () => <ProgressUI />;
export const Gradient = () => <GradientProgress />;
export const Progress2 = () => <ProgressExample2 />;