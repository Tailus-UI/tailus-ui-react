import TabsMarketing from "./marketing/Marketing";
import OutlinedTabsMarketing from "./marketing/Outlined";
import MixedTabsMarketing from "./marketing/Mixed";

export default {
    component: TabsMarketing
}

export const Default = () => <TabsMarketing />;
export const Outlined = () => <OutlinedTabsMarketing />;
export const Mixed = () => <MixedTabsMarketing />;