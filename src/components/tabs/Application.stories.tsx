import TabsApp from "./application/Application";
import TabsAppOulined from "./application/Outlined";
import TabsAppMixed from "./application/Mixed";

export default {
    component: TabsApp
}

export const Default = () => <TabsApp />;
export const Outlined = () => <TabsAppOulined />;
export const Mixed = () => <TabsAppMixed />;
