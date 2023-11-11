import type { Meta, StoryObj } from '@storybook/react';
import { AnnonceConcern, AnnonceMessage, AnnonceRoot } from './Annonce.tsx';

const AnnonceUI = ({
  variant,
  intent,
  concern,
  message,
  href,
} : {
  variant: 'outlined' | 'soft',
  intent: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'accent' | 'gray' | 'neutral',
  concern: string,
  message: string,
  href: string
}) => (
  <AnnonceRoot href={href} variant={variant}>
    <AnnonceConcern intent={intent}>{concern}</AnnonceConcern>
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
      options: ['soft', 'outlined']
    },
    intent: {
      control: 'select',
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray",]
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
    concern: "New",
    message: "The all new version of Tailus is out !",
    href: ""
  },
};
