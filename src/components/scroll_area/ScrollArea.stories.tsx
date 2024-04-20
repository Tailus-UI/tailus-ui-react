import {Meta, StoryObj} from "@storybook/react";
import ScrollArea from "./ScrollArea.tsx";
import { Title } from "../typography/Title.tsx";
import { Text } from "../typography/Text.tsx";
import { List } from "../typography/List.tsx";
import { Card } from "../card/Card.tsx";
import { Link } from "../typography/Link.tsx";

const ScrollAreaUI = () => (
  <ScrollArea.Root className="h-full w-fit overflow-hidden">
    <ScrollArea.Viewport className="flex h-full w-full snap-x snap-proximity scroll-pl-12 items-center">
      <div className="flex items-center gap-12 px-12">
        <div className="min-w-[16rem] max-w-[16rem] snap-center">
          <img
            className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]"
            src="https://img.freepik.com/free-photo/gorilla-closeup-from-side-view_488145-1603.jpg?w=1800&t=st=1692080021~exp=1692080621~hmac=5c53b171def22f37d8082f8534f1e917d2e3f739577182cf1f3ecb412d1fb4b9"
            alt=""/>
          <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
            <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
        </div>
        <div className="min-w-[16rem] max-w-[16rem] snap-center">
          <img
            className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]"
            src="https://img.freepik.com/free-photo/wet-muddy-elephant-playing-around-puddle-water-jungle_181624-10837.jpg?w=1800&t=st=1691738273~exp=1691738873~hmac=1c0dff4bfcf739fb8c9fe452e0d71f672d471d542fc2242ade7017db6cd400b0"
            alt=""/>
          <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
            <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
        </div>
        <div className="min-w-[16rem] max-w-[16rem] snap-center">
          <img
            className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]"
            src="https://images.unsplash.com/photo-1660374509603-a51e49ae07a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80"
            alt=""/>
          <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
            <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
        </div>
        <div className="min-w-[16rem] max-w-[16rem] snap-center">
          <img
            className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]"
            src="https://images.unsplash.com/photo-1519900627059-a45ee0f54da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""/>
          <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
            <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
        </div>
        <div className="min-w-[16rem] max-w-[16rem] snap-center">
          <img
            className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]"
            src="https://images.unsplash.com/photo-1666808887221-d4a06ad2dc87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""/>
          <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
            <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
        </div>
        <div className="min-w-[16rem] max-w-[16rem] snap-center">
          <img
            className="aspect-square h-full w-full rounded-xl object-cover transition-all duration-500 [clip-path:inset(0%_0%_0%_0%_round_0.75rem)] hover:[clip-path:inset(3%_3%_3%_3%_round_0.75rem)]"
            src="https://images.unsplash.com/photo-1664331746392-cb3a90a8c1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""/>
          <span className="ml-2 mt-1 block text-sm text-gray-600 dark:text-gray-400">
                        A photo by{" "}
            <a href="" className="text-primary-600 hover:underline dark:text-primary-400">
                            Jonathan Tshibangu
                        </a>
                    </span>
        </div>
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb className={"bg-red-500"}/>
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="horizontal"/>
  </ScrollArea.Root>
);

const VerticalScrollArea = () => (
  <Card variant="outlined" className="px-2 py-0">
    <ScrollArea.Root className="h-[60vh]">
      <ScrollArea.Viewport className="h-full w-full snap-y snap-mandatory">
        <div className="max-w-lg px-10 py-12">
          <Title>Tailus Themer</Title>
          <Text className="mt-4">
            Tailwind CSS Styling Library for Building Modern, Consistent and Accessible Web UIs with Radix UI, Melt UI, and Radix Vue.
          </Text>

          <Title as="h2" size="base" className="mt-8">
            Concept
          </Title>
          <Text className="mt-4">
            Imagine Tailus Themer as a secret style vault for our UI Kits. It uses Tailwind CSS, making it super easy to customize the look and feel of your components. This means you get a consistent design foundation across all these UI Kits, but with the freedom to tweak things to perfectly match your brand.
          </Text>

          <Title as="h2" size="base" className="mt-8">
            Features
          </Title>
          <List className="mt-4 space-y-4">
            <li>
              <Text as="strong">Built-in Palettes: </Text> Hit the ground running with a collection of pre-designed color schemes to jumpstart your project.
            </li>
            <li>
              <Text as="strong">Multi-Themed Apps:</Text> Effortlessly create web applications with multiple themes, offering users a personalized experience.
            </li>
            <li>
              <Text as="strong">Effortless Customization: </Text>Tailor the look and feel to your exact needs. Choose between the intuitive Themer plugin or leverage the power of CSS variables.
            </li>
            <li>
              <Text as="strong">Expanded Component Variants: </Text> Enjoy a wider range of component variations for even greater design flexibility.
            </li>
            <li>
              <Text as="strong">Accessibility First:</Text> Build UIs that are inclusive and user-friendly for everyone.
            </li>
            <li>
              <Text as="strong">Modern & Trendy:</Text> Stay ahead of the curve with Tailus Themer's focus on modern design trends.
            </li>
          </List>

          <Title as="h2" size="base" className="mt-8">
            Credits
          </Title>
          <List className="mt-4 space-y-2">
            <li>
              <Link
                href="https://www.tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                href="https://www.radix-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Radix UI
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tailwind-variants.org/docs/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind Variants
              </Link>
            </li>
            <li>
              <Link
                href="https://flowbite.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flowbite Theme
              </Link>
            </li>
            <li>
              Special thanks to{" "}
              <Link
                href="https://twitter.com/tshiokufila"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shekinah Tshiokufila
              </Link>
              {" "}for the continious support and feedback.
            </li>
            <li>
              Special thanks to{" "}
              <Link
                href="https://twitter.com/theo_balick"
                target="_blank"
                rel="noopener noreferrer"
              >
                Théo Balick
              </Link>
              {" "}whose brainstorming sessions and research fueled the creation of Tailus Themer.
            </li>
          </List>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical"/>
      <ScrollArea.Scrollbar orientation="horizontal"/>
    </ScrollArea.Root>
  </Card>
)

const meta: Meta = {
  title: 'ScrollArea',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The scroll area component theme is a collection of Tailwind CSS utilities that can be used' +
          ' to create scroll areas with a single variant. Scroll areas are used to allow users to scroll through' +
          ' content that is larger than the viewport.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollArea_: Story = {
  render: () => (
    <div
      className="flex aspect-video h-full w-full max-w-3xl items-center rounded-2xl border border-gray-200 py-1 dark:border-white/10">
      <ScrollAreaUI/>
    </div>
  )
};

export const Vertical: Story = {
  render: () => (
    <VerticalScrollArea/>
  )
};