import { card, elevatedGradientVariant, elevatedVariant, softVariant, softGradientVariant, mixedVariant } from '@tailus/themer-card'
import { cva, VariantProps } from 'class-variance-authority'
import {cn} from "../../lib/utils"

const cardui = cva(["max-w-xs"], {
  variants: {
    variant: {
      card: card,
      mixed: mixedVariant,
      elevated: elevatedVariant,
      elevatedGradient: elevatedGradientVariant.outer,
      soft: softVariant,
      softGradient: softGradientVariant.outer, 
    },
    padding: {
      0: 'p-0',
      1: 'p-1',
      2: 'p-2',
      3: 'p-3',
    }
  },
  defaultVariants: {
    variant: "card",
    padding: 0,
  }
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardui> {}
    

export const MyCard: React.FC<CardProps> = ({
  className,
  variant,
  padding,
  children,
  ...props
}) => (
  <div className={cn(cardui({ variant, padding, className }))} {...props} >
      {
        variant === 'softGradient' ? 
        <>
          <div className={softGradientVariant.inner}>
            {children}
          </div>
        </>
        : variant === 'elevatedGradient' ?
        <>
          <div className={elevatedGradientVariant.inner}>
            {children}
          </div>
        </>
        :
        <>
          { children }
        </>
      }
  </div>
);
