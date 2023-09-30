import { card, elevatedGradientVariant, elevatedVariant, softVariant, softGradientVariant, mixedVariant } from '@tailus/themer-card'
import { cva, VariantProps } from 'class-variance-authority'

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
      none: 'p-0',
      one: 'p-1',
      two: 'p-2',
      three: 'p-3',
    }
  },
  defaultVariants: {
    variant: "card",
    padding: "none",
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
  <div className={cardui({ variant, padding, className })} {...props} >
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
