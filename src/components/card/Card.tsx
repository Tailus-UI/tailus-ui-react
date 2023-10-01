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

<<<<<<< HEAD
const CardUI = () => (
    <div className={cardTheme + " w-[500px] max-w-xs"}>
        <div className='aspect-auto'>
            <img className="h-full w-full object-cover dark:hidden" src="/legend.png" alt="tailus card stats img" height={688} width={1168} />
            <img className="hidden h-full w-full object-cover dark:block" src="/legend-dark.png" alt="tailus card dark stats img" height={688} width={1168} />
        </div>
        <div className="relative z-10 mt-6 space-y-3 text-center">
            <h3 className="text-xl font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h3>
            <p className="text-base text-gray-700 dark:text-gray-300">Provident fugit vero voluptate dolores voluptates a sapiente.</p>
=======


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
  softGradient: softGradientVariant.outer,
};

const cardui = cva([''], {
  variants: {
    variant: variantMap,
    padding: paddingVariants,
  },
  defaultVariants: {
    variant: 'outlined',
    padding: 5,
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
  return (
    <div className={classes} {...props}>
      {innerClass ? (
        <div className={innerClass}>
          {children}
>>>>>>> 2017f2c5eb3c55baa1d82502f3ba57c5a0d8e218
        </div>
      ) : (
        children
      )}
    </div>
  );
};