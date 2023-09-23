import * as Tabs from "@radix-ui/react-tabs";
import { tabs as tabsTheme } from "@tailus/themer-tabs";
import { mixedVariant as cardTheme } from "@tailus/themer-card";
import { button as buttonTheme } from "@tailus/themer-button";

function onValueChange(): void {
  const indicator4 = document.getElementById("indicator4") as HTMLElement | null;
  const list = document.querySelector("#marketing-tabs") as HTMLElement | null;
  const activeTrigger = list?.querySelector("[data-state='active']") as HTMLElement | null;

    if (indicator4 && activeTrigger) {
        indicator4.style.left =  activeTrigger.offsetLeft + "px";
        indicator4.style.width = activeTrigger.offsetWidth + "px";
    }
}

onValueChange();

const OutlinedTabsMarketing = () => (
    <Tabs.Root className="my-auto flex h-fit space-y-4 flex-col" defaultValue="monthly" onValueChange={onValueChange}>
        <Tabs.List className={tabsTheme.list.outlined + " w-max mx-auto"} aria-label="Manage your account" id="marketing-tabs">
            <span id="indicator4" className={tabsTheme.indicator.outlined} aria-hidden="true"></span>
            <Tabs.Trigger className={tabsTheme.trigger} value="monthly">
                Monthly
            </Tabs.Trigger>
            <Tabs.Trigger className={tabsTheme.trigger} value="yearly">
                Yearly
            </Tabs.Trigger>
        </Tabs.List>
        <div className="mt-6 w-80">
        
            <div className={cardTheme}>
                <div className="mx-auto flex h-6 w-fit items-center justify-center rounded-full border-y border-b-gray-700 border-t-warning-300/80 bg-warning-50 px-2 text-xs tracking-wide text-warning-900 dark:bg-gray-800 dark:text-white">Popular</div>
                <svg className="mx-auto mt-4 h-8 w-8 text-warning-950 dark:text-warning-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.48 9.5242C30.2544 9.32751 29.9754 9.2023 29.6785 9.16446C29.3817 9.12663 29.0802 9.17787 28.8125 9.3117L22.5362 12.4367L17.2962 3.73295C17.1615 3.50961 16.9714 3.32486 16.7443 3.19661C16.5172 3.06837 16.2608 3.00098 16 3.00098C15.7392 3.00098 15.4828 3.06837 15.2557 3.19661C15.0286 3.32486 14.8384 3.50961 14.7037 3.73295L9.46375 12.4404L3.19 9.31545C2.92292 9.18281 2.62262 9.13201 2.32678 9.16942C2.03094 9.20683 1.75274 9.33078 1.52709 9.52572C1.30143 9.72066 1.13839 9.97791 1.0584 10.2652C0.978416 10.5524 0.985058 10.8569 1.07749 11.1404L5.70249 25.3104C5.749 25.4528 5.82688 25.5829 5.93039 25.6911C6.0339 25.7994 6.16039 25.8829 6.30054 25.9357C6.44068 25.9885 6.59089 26.0092 6.74008 25.9961C6.88927 25.9831 7.03363 25.9367 7.16249 25.8605C7.19374 25.8417 10.39 24.0005 16 24.0005C21.61 24.0005 24.8062 25.8417 24.835 25.8592C24.9639 25.9362 25.1085 25.9832 25.2581 25.9967C25.4076 26.0102 25.5583 25.9898 25.6989 25.9371C25.8396 25.8844 25.9665 25.8007 26.0703 25.6922C26.1742 25.5837 26.2522 25.4532 26.2987 25.3104L30.9237 11.1442C31.0188 10.8606 31.0274 10.5551 30.9484 10.2667C30.8694 9.97819 30.7063 9.71974 30.48 9.5242ZM24.75 23.6042C23.25 22.968 20.26 22.0005 16 22.0005C11.74 22.0005 8.74999 22.968 7.24999 23.6042L3.33874 11.6255L8.97249 14.4342C9.3135 14.6024 9.70513 14.6367 10.0702 14.5305C10.4353 14.4243 10.7474 14.1853 10.945 13.8604L16 5.45795L21.055 13.858C21.2528 14.1823 21.5646 14.4209 21.9294 14.5271C22.2941 14.6332 22.6853 14.5992 23.0262 14.4317L28.6612 11.6255L24.75 23.6042ZM21.9837 19.6042C21.9429 19.8355 21.822 20.0451 21.6421 20.1962C21.4622 20.3473 21.2349 20.4302 21 20.4305C20.9413 20.4304 20.8828 20.4254 20.825 20.4155C17.6309 19.8671 14.3666 19.8671 11.1725 20.4155C10.9113 20.4615 10.6424 20.4019 10.4251 20.2498C10.2078 20.0977 10.0598 19.8654 10.0137 19.6042C9.96766 19.343 10.0272 19.0741 10.1794 18.8568C10.3315 18.6395 10.5638 18.4915 10.825 18.4454C14.2491 17.8571 17.7484 17.8571 21.1725 18.4454C21.4332 18.4912 21.6652 18.6385 21.8175 18.855C21.9698 19.0715 22.03 19.3396 21.985 19.6005L21.9837 19.6042Z"
                        fill="currentColor"
                    />
                </svg>
                <h3 className="my-4 text-center text-xl font-medium text-gray-900 dark:text-white">Complete</h3>
                <div className="mx-auto mb-10 space-y-6 sm:w-3/5 lg:w-full">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <Tabs.Content className="grow text-gray-600 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black dark:text-gray-400" value="monthly">
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-semibold text-gray-900 dark:text-white">$49.99</span>
                                <span className="mb-1 block text-xs tracking-wide text-gray-600 dark:text-gray-400">/ Month</span>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="grow text-gray-600 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black dark:text-gray-400" value="yearly">
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-semibold text-gray-900 dark:text-white">$39.99</span>
                                <span className="mb-1 block text-xs tracking-wide text-gray-600 dark:text-gray-400">/ Month</span>
                            </div>
                        </Tabs.Content>
                        <span className="block text-sm tracking-wide text-gray-500 dark:text-gray-400">Plus local taxes</span>
                    </div>
                    <button className={buttonTheme.primary.md + " w-full"}>
                        <span>Get started</span>
                        </button>
                </div>
                <div className="sm:mx-auto sm:w-3/5 lg:w-full">
                    <ul className="ml-5 list-outside list-image-[url(/list.svg)] space-y-4 text-gray-700 dark:text-gray-200 lg:ml-5">
                        <li>Home</li>
                        <li>Solution page</li>
                        <li>About page</li>
                        <li>Pricing page</li>
                    </ul>
                    </div>
                    </div>
            </div>
    </Tabs.Root>
);

export default OutlinedTabsMarketing;
