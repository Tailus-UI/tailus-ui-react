import {TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger} from "./Tooltip";
import {ArchiveIcon} from "@radix-ui/react-icons";
import {iconButton as buttonTheme} from "@tailus/themer-button";
import {Meta, StoryObj} from "@storybook/react";

const TooltipUI = ({ withArrow }: { withArrow?: boolean }) => {
    return (
      <TooltipProvider>
          <TooltipRoot>
              <TooltipTrigger>
                  <button className={buttonTheme.warning.md}>
                      <span className="sr-only">Archive</span>
                      <ArchiveIcon className={buttonTheme.icon.md} aria-hidden/>
                  </button>
              </TooltipTrigger>
              <TooltipPortal>
                  <TooltipContent className="bg-red-400">
                      Archive
                      {withArrow && <TooltipArrow />}
                  </TooltipContent>
              </TooltipPortal>
          </TooltipRoot>
      </TooltipProvider>
    );
};

const meta: Meta<typeof TooltipUI> = {
    title: 'Tooltip',
    component: TooltipUI,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A customizable button component for React applications.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        withArrow: { control: 'boolean', defaultValue: false  },
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {
    args: {
        withArrow: true,
    },
};