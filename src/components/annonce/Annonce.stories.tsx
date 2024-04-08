import type { Meta, StoryObj } from '@storybook/react';
import { AnnonceConcern, AnnonceMessage, AnnonceRoot } from './Annonce.tsx';
import type { AnnonceConcernVariants, AnnonceRootVariants } from '@tailus/themer';

const AnnonceUI = ({
  variant,
  intent,
  concern,
  message,
  href,
  size,
  concernSize
} : {
  variant: AnnonceRootVariants['variant'],
  intent: AnnonceConcernVariants['intent'],
  size: AnnonceRootVariants['size'],
  concernSize: AnnonceConcernVariants['size'],
  concern: string,
  message: string,
  href: string
}) => (
  <AnnonceRoot href={href} variant={variant} size={size}>
    <AnnonceConcern intent={intent} size={concernSize}>{concern}</AnnonceConcern>
    <AnnonceMessage>{message}</AnnonceMessage>
  </AnnonceRoot>
);

const meta: Meta<typeof AnnonceUI> = {
  title: 'Annonce',
  component: AnnonceUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable Annonce component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'soft', 'outlined', 'mixed']
    },
    intent: {
      control: 'select',
      options: ["primary", "danger", "warning", "gray", "gradient", "neutral"]
    },
    size: {
      control: 'select',
      options: ["xs", "sm", "md", "lg"]
    },
    concernSize: {
      control: 'select',
      options: ["xs", "sm", "md", "lg"]
    },
    concern: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    href: {
      control: 'text',
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Annonce: Story = {
  args: {
    variant: 'outlined',
    intent: "primary",
    size: "md",
    concernSize : "md",
    concern: "New",
    message: "The all new version of Tailus is out !",
    href: ""
  },
};
