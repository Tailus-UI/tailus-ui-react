import type { Preview } from "@storybook/react";
import '../src/index.css';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      },
    },
    layout: 'centered',
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
