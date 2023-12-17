import {tabs as tabsTheme} from "@tailus/themer-tabs";
import {useEffect, useRef, useState} from "react";
import Tabs from "./Tabs.tsx";

type TabsAppProps = "nike" | "adidas" | "puma"
type TabsVariant = "default" | "soft" | "outlined" | "bottomIndicator";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
type Intent = "primary" | "secondary" | "accent" | "gray" | "neutral";

type TabsUIProps = {
  variant?: TabsVariant,
  size?: Size,
  intent?: Intent
}

const TabsUI = ({ variant }: TabsUIProps) => {
  const [state, setState] = useState<TabsAppProps>("adidas");
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const activeTrigger = document.getElementById(state) as HTMLElement;
    if (spanRef.current) {
      spanRef.current.style.left = activeTrigger.offsetLeft + "px";
      spanRef.current.style.width = activeTrigger.offsetWidth + "px";
    }
  }, [state]);

  return (
    <Tabs.Root 
      variant={variant}
      className="w-[22rem] flex flex-col" 
      defaultValue={state}
      onValueChange={(value) => setState(value as TabsAppProps)}
    >
      <Tabs.List 
        className={"w-max"} 
        aria-label="stores"
      >
        <Tabs.Indicator ref={spanRef}/>
        <Tabs.Trigger value="nike" id="nike">
          <Tabs.TriggerIcon>
            <svg aria-hidden viewBox="0 0 24 9" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.9998 0L6.44181 7.476C4.98581 8.092 3.76281 8.401 2.77381 8.401C1.65381 8.401 0.840814 8.009 0.336814 7.224C0.0198138 6.72 -0.0731862 6.081 0.0568138 5.306C0.186814 4.531 0.532814 3.706 1.09281 2.828C1.55981 2.118 2.32481 1.185 3.38981 0.0279999C3.02858 0.596666 2.76368 1.22106 2.60581 1.876C2.32581 3.071 2.57781 3.948 3.36181 4.508C3.73481 4.769 4.24781 4.9 4.90181 4.9C5.42381 4.9 6.01181 4.816 6.66581 4.648L23.9998 0Z"
                fill="currentColor"/>
            </svg>
          </Tabs.TriggerIcon>
          Nike
        </Tabs.Trigger>
        <Tabs.Trigger value="adidas" id="adidas">
          <Tabs.TriggerIcon>
            <svg className={tabsTheme.triggerIcon} aria-hidden viewBox="0 0 23 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.6 14L0 12.964L4.33 10.464L6.373 14H0.599H0.6ZM14.456 14H8.682L5.063 7.732L9.393 5.232L14.457 14H14.456ZM22.539 14H16.765L10.125 2.5L14.455 0L22.539 14Z"
                fill="currentColor"/>
            </svg>
          </Tabs.TriggerIcon>
          Adidas
        </Tabs.Trigger>
        <Tabs.Trigger value="puma" id="puma">
          <Tabs.TriggerIcon>
            <svg className={tabsTheme.triggerIcon} aria-hidden viewBox="0 0 24 19" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.8451 0.258435C23.4281 -0.274565 22.6991 0.152435 22.3781 0.338435C20.0941 1.68444 19.7571 4.05444 18.9611 5.41544C18.3351 6.50544 17.3091 7.30543 16.3811 7.36743C15.6951 7.41643 14.9511 7.28344 14.2131 6.96244C12.4061 6.18144 11.4331 5.17044 11.1961 4.99244C10.7091 4.62244 6.96614 0.977435 3.91614 0.828435C3.91614 0.828435 3.54414 0.0784352 3.45114 0.0654352C3.22914 0.0404352 3.00114 0.516435 2.83514 0.566435C2.68514 0.619435 2.42214 0.0544351 2.27014 0.0794351C2.11714 0.0994351 1.96814 0.665435 1.67014 0.956435C1.45014 1.16944 1.18414 1.15644 1.03314 1.41944C0.981141 1.51544 0.999141 1.68444 0.940141 1.83944C0.813141 2.15944 0.389141 2.19343 0.385141 2.53643C0.385141 2.91743 0.742141 2.99044 1.05414 3.25644C1.30214 3.46844 1.31914 3.61844 1.60814 3.71744C1.86614 3.80544 2.24014 3.53044 2.57214 3.62944C2.84914 3.71044 3.11514 3.76944 3.17414 4.05244C3.22814 4.30844 3.17414 4.71044 2.83414 4.66544C2.72214 4.65044 2.23614 4.49144 1.63614 4.55544C0.911141 4.63244 0.0831409 4.86444 0.00214085 5.66544C-0.0388591 6.11244 0.516141 6.63544 1.05714 6.53144C1.42814 6.46044 1.25314 6.02543 1.45614 5.81543C1.72314 5.54543 3.22814 6.75944 4.62814 6.75944C5.22114 6.75944 5.65914 6.60944 6.09514 6.15444C6.13514 6.12544 6.18814 6.05244 6.25014 6.04444C6.31967 6.06247 6.38561 6.09223 6.44514 6.13244C7.57614 7.02944 8.42914 8.83243 12.5751 8.85343C13.1571 8.86043 13.8251 9.13243 14.3711 9.63043C14.8511 10.0634 15.1351 10.7554 15.4081 11.4554C15.8261 12.5084 16.5691 13.5244 17.7001 14.6584C17.7601 14.7264 18.6901 15.4384 18.7601 15.4914C18.7721 15.5014 18.8441 15.6584 18.8131 15.7464C18.7931 16.4364 18.6901 18.4164 20.1781 18.4994C20.5441 18.5194 20.4531 18.2684 20.4531 18.0894C20.4481 17.7484 20.3881 17.4044 20.5661 17.0494C20.8191 16.5714 20.0401 16.3404 20.0571 15.2934C20.0761 14.5094 19.4121 14.6424 19.0731 14.0434C18.8831 13.7004 18.7051 13.5114 18.7231 13.0974C18.7961 10.7174 18.2061 9.14944 17.9181 8.77044C17.6911 8.47644 17.4951 8.36743 17.7111 8.23043C18.9511 7.41543 19.2361 6.65644 19.2361 6.65644C19.8961 5.11544 20.4921 3.71144 21.3111 3.08644C21.4771 2.96644 21.9001 2.64644 22.1631 2.52644C22.9261 2.16444 23.3361 1.94844 23.5511 1.73844C23.9071 1.40144 24.1861 0.685435 23.8451 0.258435Z"
                fill="currentColor"/>
            </svg>
          </Tabs.TriggerIcon>
          Puma
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="nike">
        Nike
      </Tabs.Content>
      <Tabs.Content className="" value="adidas">
        Adidas
      </Tabs.Content>
      <Tabs.Content className="" value="puma">
        Puma
      </Tabs.Content>
    </Tabs.Root>
  )
}

export default {
  component: TabsUI,
  title: "Tabs"
}

const Template = (args) => <TabsUI {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const bottomIndicator = Template.bind({});
bottomIndicator.args = {
  variant: "bottomIndicator"
};

export const soft = Template.bind({});
soft.args = {
  variant: "soft"
};

export const outlined = Template.bind({});
outlined.args = {
  variant: "outlined"
};