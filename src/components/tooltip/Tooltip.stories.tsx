import {TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger} from "./Tooltip";
import {ArchiveIcon} from "@radix-ui/react-icons";
import {iconButton as buttonTheme} from "@tailus/themer-button";

export const Tooltip = () => {
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
                  <TooltipContent>
                      Archive
                  </TooltipContent>
              </TooltipPortal>
          </TooltipRoot>
      </TooltipProvider>
    );
};

export default {
    component : Tooltip,
}

export const WithArrow = () => {
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
                  <TooltipContent>
                      Archive
                        <TooltipArrow />
                  </TooltipContent>
              </TooltipPortal>
          </TooltipRoot>
      </TooltipProvider>
    );
}
