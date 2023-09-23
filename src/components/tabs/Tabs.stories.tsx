import TabsAppUI from './Tabs';
import SoftTabs from './Soft';
import TabsBottomIndicator from './BottomIndicator';
import OutlinedTabs from './Outlined';

export default {
    component : TabsAppUI
}

export const Tabs = () => <TabsAppUI />;
export const Soft = () => <SoftTabs />;
export const BottomIndicator = () => <TabsBottomIndicator />;
export const Outlined = () => <OutlinedTabs />;