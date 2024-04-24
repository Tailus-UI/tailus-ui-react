import {useEffect, useRef, useState} from "react";
import Tabs from "./Tabs.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps
} from "@tailus/themer";

export type TabsAppProps = "nike" | "adidas" | "puma"

export interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

const TabsUI = ({variant, triggerVariant, size, intent, indicatorVariant}: TabsUIProps) => {
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
      className="w-[22rem] flex flex-col"
      defaultValue={state}
      onValueChange={(value) => setState(value as TabsAppProps)}
    >
      <Tabs.List
        aria-label="stores"
        variant={variant}
        triggerVariant={triggerVariant}
        intent={intent}
        size={size}
      >
        <Tabs.Indicator ref={spanRef} variant={indicatorVariant} intent={intent} />
        <Tabs.Trigger value="nike" id="nike">
          Nike
        </Tabs.Trigger>
        <Tabs.Trigger value="adidas" id="adidas">
          Adidas
        </Tabs.Trigger>
        <Tabs.Trigger value="puma" id="puma">
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

const meta: Meta<typeof TabsUI> = {
  title: "Tabs",
  component: TabsUI,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The tabs component theme is a collection of Tailwindcss utilities that can be used to create tabs components with different colors, styles, and variants. Tabs components are used to allow users to navigate between different sections of content.",
      }
    }
  },
  argTypes: {
    variant: {
      options: ["soft", "outlined", "mixed","plain", "bottomOutlined"],
      control: "select",
      defaultValue: "default"
    },
    triggerVariant: {
      options: ["softToSoft", "softToSolid", "outlinedToSolid", "plain"],
      control: "select",
    },
    indicatorVariant: {
      options: ["bottom", "outlined", "elevated", "mixed", "fancy"],
      control: "select",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    intent: {
      control: "select",
      options: ["primary", "secondary", "accent", "gray", "neutral"],
    }
  },
}

export default meta;
type Story = StoryObj<typeof TabsUI>;

export const Tabs_: Story = {
  args: {
    variant: "soft",
    triggerVariant: "plain",
    size: "md",
    indicatorVariant: "fancy",
  }
}
