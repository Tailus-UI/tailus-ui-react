import { 
  card,
  elevatedVariant,
  elevatedGradientVariant,
  mixedVariant,
  softVariant,
  softGradientVariant,
} from '@tailus/themer-card';

export function getPadding (padding: string):string {

  switch (padding) {
    case 'one':
      return 'p-1'
      break;
    case 'two':
      return 'p-2'
    break;
    case 'three':
      return 'p-3'
    break;
    case 'four':
      return 'p-4'
    break;
    case 'five':
      return 'p-5'
    break;
    case 'six':
      return 'p-6'
    break;
    case 'seven':
      return 'p-7'
    break;
    case 'height':
      return 'p-8'
    break;
    case 'nine':
      return 'p-9'
    break;
    case 'ten':
      return 'p-10'
    break;
    case 'eleven':
      return 'p-11'
    break;
    case 'twelve':
      return 'p-12'
    break;
    default:
      return 'p-13'
        break;
}
}

export function getVariant (variant: string): string | { outer: string, inner: string } {
  
  switch (variant) {
    case 'elevated':
        return elevatedVariant;
        break;
    case 'elevatedGradient':
        return elevatedGradientVariant;
        break;
    case 'mixed':
        return mixedVariant ;
        break;
    case 'soft':
        return softVariant ;
        break;
    case 'softGradient':
        return softGradientVariant ;
        break;
    default:
        return card ;
        break;
}
}