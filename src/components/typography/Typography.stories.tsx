import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import { Display, Title, Text, Link, List, Caption, Code, Kbd } from "./"
import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Components / Typography / Overview',
  parameters: {
    docs: {
      description: {
        component: 'A customizable badge component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DisplayExample: Story = {
    name: "Display",
    render: () => (
        <div>
            <Display size={
                {
                    initial: "4xl",
                    sm: "5xl",
                    xl: "6xl"
                }
            } as="h1" align={{ initial: "center" }}>Build Custom Web UIs</Display>
            <Text align="center" className="mt-4 max-w-lg mx-auto">
                Highly customizable components for building modern websites and applications that look and feel the way you want.
            </Text>
            <div className="mt-6 flex justify-center flex-wrap gap-3">
                <Button.Root intent="neutral" size="lg">
                    <Button.Label>Start Building</Button.Label>
                </Button.Root>
                <Button.Root variant="outlined" intent="gray" size="lg">
                    <Button.Label>Components</Button.Label>
                </Button.Root>
            </div>
        </div>
    )
};

export const ListExample: Story = {
    name: "List",
    render: () => (
        <div>
            <Title as="h2" size="base" weight="medium">List</Title>
            <List className="mt-2 mb-6">
                <li>Highly customizable components</li>
                <li>Modern websites and applications</li>
                <li>Look and feel the way you want</li>
            </List>

            <Title as="h2" size="base" weight="medium">Ordered List</Title>
            <List as="ol" type="decimal" className="mt-2">
                <li>Highly customizable components</li>
                <li>Modern websites and applications</li>
                <li>Look and feel the way you want</li>
            </List>
        </div>
    )
};

export const CaptionExample: Story = {
    name: "Caption",
    render: () => (
        <div className="grid gap-3 place-items-center [grid-template-columns:auto_1fr]">
            <Avatar.Root size="xl">
                <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" alt="Méschac Irung" loading="lazy" width={120} height={120} />
                <Avatar.Fallback intent="danger">MI</Avatar.Fallback>
            </Avatar.Root>
            <div>
                <Text neutral>Méschac Irung</Text>
                <Caption>Caption</Caption>
            </div>
        </div>
    )
};

export const TextExample: Story = {
    name: "Text",
    render: () => (
        <div className="max-w-md mx-auto">
            <Text>
                Highly <Text as="strong">customizable</Text> components for building modern websites and <Text as="em">applications</Text> that look and feel the way you want.
            </Text>
        </div>
    )
};

export const TextWithLinkExample: Story = {
    name: "Text with Link",
    render: () => (
        <div className="max-w-md mx-auto">
            <Text>
                Highly <Link intent="primary" variant="underlined" size="base" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">customizable components</Link> for building <Text as="strong">modern</Text> websites and <Text as="em">applications</Text> that look and feel the way you want.
            </Text>
        </div>
    )
};

export const CodeExample: Story = {
    name: "Code",
    render: () => (
        <div className="max-w-md mx-auto">
            <Text>
                Import the plugin in your <Code>tailwind.config.js</Code> file
            </Text>
        </div>
    )
};

export const KbdExample: Story = {
    name: "Kbd",
    render: () => (
        <div className="max-w-md mx-auto">
            <Text align="left">
                Press <Kbd>Cmd</Kbd> + <Kbd>E</Kbd> to open the customizer panel
            </Text>
        </div>
    )
};