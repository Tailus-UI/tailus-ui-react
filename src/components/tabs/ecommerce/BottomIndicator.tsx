import * as Tabs from "@radix-ui/react-tabs";
import { bottomIndicatorTabs as tabsTheme } from "@tailus/themer-tabs";
import { card as cardTheme } from "@tailus/themer-card";
import { softBadge as badge } from "@tailus/themer-badge";

function onValueChange(): void {
  const indicator4 = document.getElementById("indicator4") as HTMLElement | null;
  const list = document.querySelector("#ecommerce") as HTMLElement | null;
  const activeTrigger = list?.querySelector("[data-state='active']") as HTMLElement | null;

    if (indicator4 && activeTrigger) {
        indicator4.style.left =  activeTrigger.offsetLeft + 8 + "px";
        indicator4.style.width = activeTrigger.offsetWidth - 16 + "px";
    }
}

onValueChange();

const BottomIndicatorTabsEcommerce = () => (
    <Tabs.Root className="my-auto space-y-4 flex flex-col h-fit border p-6 rounded-3xl border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]" defaultValue="nike" onValueChange={onValueChange}>
        <Tabs.List className={tabsTheme.list} aria-label="Manage your account" id="ecommerce">
            <span id="indicator4" className={tabsTheme.indicator} aria-hidden="true"></span>
            <Tabs.Trigger className={tabsTheme.trigger} value="nike">
                <svg className={tabsTheme.triggerIcon} aria-hidden viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9998 0L6.44181 7.476C4.98581 8.092 3.76281 8.401 2.77381 8.401C1.65381 8.401 0.840814 8.009 0.336814 7.224C0.0198138 6.72 -0.0731862 6.081 0.0568138 5.306C0.186814 4.531 0.532814 3.706 1.09281 2.828C1.55981 2.118 2.32481 1.185 3.38981 0.0279999C3.02858 0.596666 2.76368 1.22106 2.60581 1.876C2.32581 3.071 2.57781 3.948 3.36181 4.508C3.73481 4.769 4.24781 4.9 4.90181 4.9C5.42381 4.9 6.01181 4.816 6.66581 4.648L23.9998 0Z" fill="currentColor"/>
                </svg>
                Nike
                <span className={badge.gray.sm}>32</span>
            </Tabs.Trigger>
            <Tabs.Trigger className={tabsTheme.trigger} value="adidas">
                <svg className={tabsTheme.triggerIcon} aria-hidden viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.6 14L0 12.964L4.33 10.464L6.373 14H0.599H0.6ZM14.456 14H8.682L5.063 7.732L9.393 5.232L14.457 14H14.456ZM22.539 14H16.765L10.125 2.5L14.455 0L22.539 14Z" fill="currentColor"/>
                </svg>
                Adidas
                <span className={badge.gray.sm}>55</span>
            </Tabs.Trigger>
            <Tabs.Trigger className={tabsTheme.trigger} value="puma">
                <svg className={tabsTheme.triggerIcon} aria-hidden viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8451 0.258435C23.4281 -0.274565 22.6991 0.152435 22.3781 0.338435C20.0941 1.68444 19.7571 4.05444 18.9611 5.41544C18.3351 6.50544 17.3091 7.30543 16.3811 7.36743C15.6951 7.41643 14.9511 7.28344 14.2131 6.96244C12.4061 6.18144 11.4331 5.17044 11.1961 4.99244C10.7091 4.62244 6.96614 0.977435 3.91614 0.828435C3.91614 0.828435 3.54414 0.0784352 3.45114 0.0654352C3.22914 0.0404352 3.00114 0.516435 2.83514 0.566435C2.68514 0.619435 2.42214 0.0544351 2.27014 0.0794351C2.11714 0.0994351 1.96814 0.665435 1.67014 0.956435C1.45014 1.16944 1.18414 1.15644 1.03314 1.41944C0.981141 1.51544 0.999141 1.68444 0.940141 1.83944C0.813141 2.15944 0.389141 2.19343 0.385141 2.53643C0.385141 2.91743 0.742141 2.99044 1.05414 3.25644C1.30214 3.46844 1.31914 3.61844 1.60814 3.71744C1.86614 3.80544 2.24014 3.53044 2.57214 3.62944C2.84914 3.71044 3.11514 3.76944 3.17414 4.05244C3.22814 4.30844 3.17414 4.71044 2.83414 4.66544C2.72214 4.65044 2.23614 4.49144 1.63614 4.55544C0.911141 4.63244 0.0831409 4.86444 0.00214085 5.66544C-0.0388591 6.11244 0.516141 6.63544 1.05714 6.53144C1.42814 6.46044 1.25314 6.02543 1.45614 5.81543C1.72314 5.54543 3.22814 6.75944 4.62814 6.75944C5.22114 6.75944 5.65914 6.60944 6.09514 6.15444C6.13514 6.12544 6.18814 6.05244 6.25014 6.04444C6.31967 6.06247 6.38561 6.09223 6.44514 6.13244C7.57614 7.02944 8.42914 8.83243 12.5751 8.85343C13.1571 8.86043 13.8251 9.13243 14.3711 9.63043C14.8511 10.0634 15.1351 10.7554 15.4081 11.4554C15.8261 12.5084 16.5691 13.5244 17.7001 14.6584C17.7601 14.7264 18.6901 15.4384 18.7601 15.4914C18.7721 15.5014 18.8441 15.6584 18.8131 15.7464C18.7931 16.4364 18.6901 18.4164 20.1781 18.4994C20.5441 18.5194 20.4531 18.2684 20.4531 18.0894C20.4481 17.7484 20.3881 17.4044 20.5661 17.0494C20.8191 16.5714 20.0401 16.3404 20.0571 15.2934C20.0761 14.5094 19.4121 14.6424 19.0731 14.0434C18.8831 13.7004 18.7051 13.5114 18.7231 13.0974C18.7961 10.7174 18.2061 9.14944 17.9181 8.77044C17.6911 8.47644 17.4951 8.36743 17.7111 8.23043C18.9511 7.41543 19.2361 6.65644 19.2361 6.65644C19.8961 5.11544 20.4921 3.71144 21.3111 3.08644C21.4771 2.96644 21.9001 2.64644 22.1631 2.52644C22.9261 2.16444 23.3361 1.94844 23.5511 1.73844C23.9071 1.40144 24.1861 0.685435 23.8451 0.258435Z" fill="currentColor"/>
                </svg>
                Puma
                <span className={badge.gray.sm}>12</span>
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="max-w-2xl" value="nike">
            <div className="grid grid-cols-2 gap-4">
                <a href="#" className={cardTheme + " !p-2 group"}>
                    <div className="overflow-hidden bg-gray-100 transition-all duration-300 [clip-path:inset(0%_0%_0%_0%_round_calc(var(--card-border-radius)-0.5rem))] group-hover:[clip-path:inset(1%_1%_1%_1%_round_calc(var(--card-border-radius)-0.75rem))]">
                        <div className="aspect-square w-full">
                            <img className="h-full w-full object-cover transition duration-300" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c27923bd-b3a6-4ffd-a8bf-3e7decdca23e/felpa-pullover-ultraoversize-con-cappuccio-sportswear-phoenix-fleece-9VKcrd.png" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-3 px-2 pb-2">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="text-base font-medium text-gray-900 transition dark:text-white">NIKE SportWear</h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Sweat-shirt</p>
                            </div>
                            <span className="space-x-2">
                                <span className="text-gray-700 line-through dark:text-gray-300">$64.99</span>
                                <span className="font-medium text-primary-700 dark:text-primary-300">$38.97</span>
                            </span>
                        </div>
                    </div>
                </a>
                <a href="#" className={cardTheme + " !p-2 group"}>
                    <div className="overflow-hidden bg-gray-100 transition-all duration-300 [clip-path:inset(0%_0%_0%_0%_round_calc(var(--card-border-radius)-0.5rem))] group-hover:[clip-path:inset(1%_1%_1%_1%_round_calc(var(--card-border-radius)-0.75rem))]">
                        <div className="aspect-square">
                            <img className="h-full w-full object-cover transition duration-300" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/76274d81-023f-4c0e-82bf-25ff919fe399/scarpa-dunk-low-ldWLJc.png" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-3 px-2 pb-2">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="text-base font-medium text-gray-900 transition dark:text-white">NIKE Low Dunk</h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Shoes</p>
                            </div>
                            <span className="space-x-2">
                                <span className="text-gray-700 line-through dark:text-gray-300">$119.99</span>
                                <span className="font-medium text-primary-700 dark:text-primary-300">$83.97</span>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </Tabs.Content>
        <Tabs.Content className="max-w-2xl" value="adidas">
            <div className="grid grid-cols-2 gap-4">
                <a href="#" className={cardTheme + " !p-2 group"}>
                    <div className="overflow-hidden bg-gray-100 transition-all duration-300 [clip-path:inset(0%_0%_0%_0%_round_calc(var(--card-border-radius)-0.5rem))] group-hover:[clip-path:inset(1%_1%_1%_1%_round_calc(var(--card-border-radius)-0.75rem))]">
                        <div className="aspect-square w-full">
                            <img className="h-full w-full object-cover transition duration-300" src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbf8ce8a7b214e8288069e7e95e028fa_9366/racer-tr23-shoes.jpg" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-3 px-2 pb-2">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="text-base font-medium text-gray-900 transition dark:text-white">Racer TR23 Shoes</h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Men's sportswear</p>
                            </div>
                            <span className="font-medium text-primary-700 dark:text-primary-300">$78.97</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={cardTheme + " !p-2 group"}>
                    <div className="overflow-hidden bg-gray-100 transition-all duration-300 [clip-path:inset(0%_0%_0%_0%_round_calc(var(--card-border-radius)-0.5rem))] group-hover:[clip-path:inset(1%_1%_1%_1%_round_calc(var(--card-border-radius)-0.75rem))]">
                        <div className="aspect-square">
                            <img className="h-full w-full object-cover transition duration-300" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/74b527153817417d8b08ba94ef7011bc_9366/Essentials_Fleece_3-Stripes_Tapered_Cuff_Pants_Grey_IJ6494_21_model.jpg" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-3 px-2 pb-2">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="text-base font-medium text-gray-900 transition dark:text-white">OWN the Run Shorts</h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Performance</p>
                            </div>
                            <span className="font-medium text-primary-700 dark:text-primary-300">$35</span>
                        </div>
                    </div>
                </a>
            </div>
        </Tabs.Content>
        <Tabs.Content className="max-w-2xl" value="puma">
            <div className="grid grid-cols-2 gap-4">
                <a href="#" className={cardTheme + " !p-2 group"}>
                    <div className="overflow-hidden bg-gray-100 transition-all duration-300 [clip-path:inset(0%_0%_0%_0%_round_calc(var(--card-border-radius)-0.5rem))] group-hover:[clip-path:inset(1%_1%_1%_1%_round_calc(var(--card-border-radius)-0.75rem))]">
                        <div className="aspect-square w-full">
                            <img className="h-full w-full object-cover transition duration-300" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/535619/31/mod03/fnd/PNA/fmt/png/Classics-Block-Men's-Hoodie" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-3 px-2 pb-2">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="text-base font-medium text-gray-900 transition dark:text-white">Classics Block Men's Hoodie</h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Men's sportswear</p>
                            </div>
                            <span className="font-medium text-primary-700 dark:text-primary-300">$70</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={cardTheme + " !p-2 group"}>
                    <div className="overflow-hidden bg-gray-100 transition-all duration-300 [clip-path:inset(0%_0%_0%_0%_round_calc(var(--card-border-radius)-0.5rem))] group-hover:[clip-path:inset(1%_1%_1%_1%_round_calc(var(--card-border-radius)-0.75rem))]">
                        <div className="aspect-square">
                            <img className="h-full w-full object-cover transition duration-300" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/384857/19/sv01/fnd/PNA/fmt/png/ST-Runner-v3-Men's-Sneakers" alt="" />
                        </div>
                    </div>
                    <div className="relative z-10 mt-3 px-2 pb-2">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="text-base font-medium text-gray-900 transition dark:text-white">Future Rider Camo Flagship</h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Men's Sneakers</p>
                            </div>
                            <span className="font-medium text-primary-700 dark:text-primary-300">$100</span>
                        </div>
                    </div>
                </a>
            </div>
        </Tabs.Content>
    </Tabs.Root>
);

export default BottomIndicatorTabsEcommerce;
