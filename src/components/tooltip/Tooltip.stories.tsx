import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from "./Tooltip";
import { type TooltipProps } from "@tailus/themer";
import {ArchiveIcon} from "@radix-ui/react-icons";
import {Meta, StoryObj} from "@storybook/react";
import Button from "../button/Button";

const TooltipUI = (args:TooltipProps & {arrow?:boolean}) => {
    return (
      <TooltipProvider>
          <TooltipRoot>
              <TooltipTrigger asChild>
                    <Button.Root intent="warning" aria-label="archive button">
                        <Button.Icon>
                            <ArchiveIcon />
                        </Button.Icon>
                  </Button.Root>
              </TooltipTrigger>
              <TooltipPortal>
                  <TooltipContent fancy={args.fancy} inverted={args.inverted}>
                      Archive
                      {args.arrow && <TooltipArrow fancy={args.fancy} inverted={args.inverted} />}
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
        arrow: { control: 'boolean', defaultValue: false },
        fancy: { control: 'boolean', defaultValue: true },
        inverted: { control: 'boolean', defaultValue: false },
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {
    args: {
        arrow: false,
        fancy: true,
        inverted: false,
    },
};