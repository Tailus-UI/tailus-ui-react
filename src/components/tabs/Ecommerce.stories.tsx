import TabsEcommerce from "./ecommerce/Ecommerce";
import OutlinedTabsEcommerce from "./ecommerce/Outlined";
import MixedTabsEcommerce from "./ecommerce/Mixed";
import BottomIndicatorTabsEcommerce from "./ecommerce/BottomIndicator"

export default {
    component: TabsEcommerce
}

export const Default = () => <TabsEcommerce />;
export const Outlined = () => <OutlinedTabsEcommerce />;
export const Mixed = () => <MixedTabsEcommerce />;
export const BottomIndicator = () => <BottomIndicatorTabsEcommerce />;