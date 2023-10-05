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
  elevatedGradient: [elevatedGradientVariant.outer, "max-w-xs"],
  soft: softVariant,
  softGradient: [softGradientVariant.outer, "max-w-xs"]
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

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardui> {}

export const Card: React.FC<CardProps> = ({
  className,
  variant,
  padding,
  children,
  ...props
}) => {
  const innerClass = variant === 'softGradient' ? softGradientVariant.inner : variant === 'elevatedGradient' ? elevatedGradientVariant.inner : '';
  const classes = cn(cardui({ variant, padding, className }));
  const innerGradient = cn(cardui({variant}))
  return (
    <div >
      {innerClass ? (
        <div className={innerGradient}>
          <div className={innerClass}>
            {children}
          </div>
        </div>
        
      ) : (
        <div className={classes} {...props}>
          {children}
        </div>
      )}
    </div>
  );
};