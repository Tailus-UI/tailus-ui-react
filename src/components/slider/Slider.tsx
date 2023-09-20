import * as Slider from "@radix-ui/react-slider";
import {slider as sliderTheme} from "@tailus/themer-slider"

const SliderUI = () => (
    <form>
        <Slider.Root className={sliderTheme.root} defaultValue={[50]} data-orientation="vertical" max={100} step={1}>
            <Slider.Track className={sliderTheme.track}>
                <Slider.Range className={sliderTheme.range} />
            </Slider.Track>
            <Slider.Thumb className={sliderTheme.thumb} aria-label="Volume" />
        </Slider.Root>
    </form>
);

export default SliderUI;
