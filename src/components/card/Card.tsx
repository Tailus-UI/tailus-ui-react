import { 
  card, 
  elevatedGradientVariant, 
  elevatedVariant, 
  softVariant, 
  softGradientVariant, 
  mixedVariant 
} from '@tailus/themer-card';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';



const paddingVariants = {
  0: 'p-0',
  1: 'p-1',
  2: 'p-2',
  3: 'p-3',
  4: 'p-4',
  5: 'p-5',
  6: 'p-6',
  7: 'p-7',
  8: 'p-8',
  9: 'p-9',
  10: 'p-10',
  11: 'p-11',
  12: 'p-12',
};

const variantMap = {
  outlined: card,
  mixed: mixedVariant,
  elevated: elevatedVariant,
  elevatedGradient: elevatedGradientVariant.outer,
  soft: softVariant,
  softGradient: softGradientVariant.outer
};


const cardui = cva([''], {
  variants: {
    variant: variantMap,
    padding: paddingVariants,
  },
  defaultVariants: {
    variant: 'outlined',
  },
});


const innerui = cva([''], {
  variants: {
    variant: {
      innerSoft: softGradientVariant.inner,
      innerElevated:  elevatedGradientVariant.inner
    },
    padding: paddingVariants,
  },
});



interface InnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof innerui> {}

const Inner: React.FC<InnerProps> = ({
  variant,
  padding,
  children,
  ...props
}) => {
  const classes = cn(innerui({ variant, padding }));
  return (
    
        <div className={classes} {...props}>
          {children}
        </div>
      )
  }


export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardui> {}

export const Card: React.FC<CardProps> = ({
  className,
  variant,
  padding,
  children,
  ...props
}) => {
  const innerClass = variant === 'softGradient' ? 'innerSoft' : variant === 'elevatedGradient' ? 'innerElevated': null;
  const classes = cn(cardui({ variant, padding, className }));
  const innerGradient = cn(cardui({variant, className}))
  return (
    <div >
      {variant === 'softGradient' || variant === 'elevatedGradient' ? (
        <div className={innerGradient}>
          <Inner variant={innerClass} padding={padding}>
            {children}
          </Inner>
        </div>
        
      ) : (
        <div className={classes} {...props}>
          {children}
        </div>
      )}
    </div>
  );
};