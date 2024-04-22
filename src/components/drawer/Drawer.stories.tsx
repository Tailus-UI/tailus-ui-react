import Drawer from "./Drawer";
import { type DrawerProps } from "@tailus/themer";
import Button from "../button/Button";
import { Link, Text } from "../typography";

export default {
  title: "Drawer",
  component: Drawer,
  tags : ['autodocs'],
  argTypes: {
    mixed: { control: "boolean" },
    fancy: { control: "boolean" },
    direction: {
      control: "select",
      options: ["bottom", "top", "left", "right"],
    },
  },
};

export const Default = (args: DrawerProps) => (

  <Drawer.Root direction={args.direction} withControler={args.withControler} shouldScaleBackground>
    <Drawer.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
            <Button.Label>
                Open Drawer
            </Button.Label>
        </Button.Root>
    </Drawer.Trigger>
    <Drawer.Portal>
        <Drawer.Overlay className="dark:bg-gray-950/50" />
        <Drawer.Content {...args}>
            <div className="max-w-md mx-auto">
                <Drawer.Title>Drawer for React</Drawer.Title> 
                <Text className="my-3">
                    This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why and how it was built <Link href="https://emilkowal.ski/ui/building-a-drawer-component" target="_blank">here</Link>
                </Text>
                <Text className="mb-3">
                  It comes unstyled and has gesture-driven animations, and is made by <Link href="https://emilkowal.ski" target="_blank">Emil</Link>
                </Text>
                <Text className="mb-8">It uses <Link href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">Radix's Dialog primitive</Link> under the hood and is inspired by <Link href="https://twitter.com/devongovett/status/1674470185783402496" target="_blank">this tweet.</Link></Text>
              <Drawer.NestedRoot direction={args.direction} shouldScaleBackground>
                <Drawer.Trigger asChild>
                    <Button.Root variant="outlined" intent="gray" size="sm">
                        <Button.Label>
                            Open Drawer
                        </Button.Label>
                    </Button.Root>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="dark:bg-gray-950/50" />
                    <Drawer.Content {...args}>
                        <div className="max-w-md mx-auto">
                            <Drawer.Title>Drawer for React</Drawer.Title> 
                            <Text className="my-3">
                                This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why and how it was built <Link href="https://emilkowal.ski/ui/building-a-drawer-component" target="_blank">here</Link>
                            </Text>
                            <Text className="mb-3">
                              It comes unstyled and has gesture-driven animations, and is made by <Link href="https://emilkowal.ski" target="_blank">Emil</Link>
                            </Text>
                            <Text className="mb-8">It uses <Link href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">Radix's Dialog primitive</Link> under the hood and is inspired by <Link href="https://twitter.com/devongovett/status/1674470185783402496" target="_blank">this tweet.</Link></Text>
                            <Drawer.Close asChild>
                                <Button.Root variant="outlined" intent="gray" size="sm">
                                    <Button.Label>
                                        Close Drawer
                                    </Button.Label>
                                </Button.Root>
                                </Drawer.Close>
                            </div>
                    </Drawer.Content>
                </Drawer.Portal>
              </Drawer.NestedRoot>
        </div>
        </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
  
);

Default.args = {
  mixed: false,
  fancy: false,
  direction: "bottom",
  withControler: false,
};