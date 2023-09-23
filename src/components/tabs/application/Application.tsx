import * as Tabs from "@radix-ui/react-tabs";
import { tabs as tabsTheme } from "@tailus/themer-tabs";
import { card as cardTheme } from "@tailus/themer-card";
import { button as buttonTheme } from "@tailus/themer-button";
import { PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";

function onValueChange(): void {
  const indicator4 = document.getElementById("indicator4") as HTMLElement | null;
  const list = document.querySelector("#app-tabs2") as HTMLElement | null;
  const activeTrigger = list?.querySelector("[data-state='active']") as HTMLElement | null;

    if (indicator4 && activeTrigger) {
        indicator4.style.left =  activeTrigger.offsetLeft + "px";
        indicator4.style.width = activeTrigger.offsetWidth + "px";
    }
}

onValueChange();

const TabsApp = () => (
    <Tabs.Root className="my-auto flex h-fit space-y-4 w-[22rem] flex-col" defaultValue="account" onValueChange={onValueChange}>
        <Tabs.List className={tabsTheme.list.soft} aria-label="Manage your account" id="app-tabs2">
            <span id="indicator4" className={tabsTheme.indicator.elevated} aria-hidden="true"></span>
            <Tabs.Trigger className={tabsTheme.trigger} value="account">
                <PersonIcon className={tabsTheme.triggerIcon} />
                Account
            </Tabs.Trigger>
            <Tabs.Trigger className={tabsTheme.trigger} value="pwd">
                <LockClosedIcon className={tabsTheme.triggerIcon} />
                Password
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="" value="account">
            <div className={cardTheme}>
                <p className="text-gray-700 dark:text-gray-300">Make changes to your account here. Click save when you're done.</p>
                <form action="" className="mt-6">
                    <div className="mb-6 space-y-4">
                        <fieldset className="space-y-2">
                            <label htmlFor="username" className="text-gray-600 dark:text-gray-400">
                                Username
                            </label>
                            <input name="username" defaultValue="@irungmeschac" className="h-11 w-full rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 placeholder-gray-500 ring-0 transition duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10 focus:ring-offset-white dark:border-gray-600 dark:text-white dark:focus:border-white/60 dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900" placeholder="Username" type="text" />
                        </fieldset>
                        <fieldset className="space-y-2">
                            <label htmlFor="fullname" className="text-gray-600 dark:text-gray-400">
                                Fullname
                            </label>
                            <input name="fullname" defaultValue="Méschac Irung" className="h-11 w-full rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 placeholder-gray-500 ring-0 transition duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10 focus:ring-offset-white dark:border-gray-600 dark:text-white dark:focus:border-white/60 dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900" placeholder="Fullname" type="text" />
                        </fieldset>
                    </div>
                    <div className="flex justify-end">
                        <button className={buttonTheme.primary.md}>
                            <span>Save changes</span>
                        </button>
                    </div>
                </form>
            </div>
        </Tabs.Content>
        <Tabs.Content className={tabsTheme.content} value="pwd">
            <div className={cardTheme}>
                <p className="text-gray-700 dark:text-gray-300">Change your password here. After saving, you'll be logged out.</p>
                <form action="" className="mt-6">
                    <div className="mb-6 space-y-4">
                        <fieldset className="space-y-2">
                            <label htmlFor="old-password" className="text-gray-700 dark:text-gray-300">
                                Old Password
                            </label>
                            <input name="old-password" className="h-11 w-full rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 placeholder-gray-500 ring-0 transition duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10 focus:ring-offset-white dark:border-gray-600 dark:text-white dark:focus:border-white/60 dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900" type="password" />
                        </fieldset>
                        <fieldset className="space-y-2">
                            <label htmlFor="new-password" className="text-gray-700 dark:text-gray-300">
                                New Password
                            </label>
                            <input name="new-password" className="h-11 w-full rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 placeholder-gray-500 ring-0 transition duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10 focus:ring-offset-white dark:border-gray-600 dark:text-white dark:focus:border-white/60 dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900" type="password" />
                        </fieldset>
                    </div>
                    <div className="flex justify-end">
                        <button className={buttonTheme.primary.md}>
                            <span>Change Password</span>
                        </button>
                    </div>
                </form>
            </div>
        </Tabs.Content>
    </Tabs.Root>
);

export default TabsApp;
