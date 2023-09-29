import { getPadding, getVariant } from './Card.config';

type Props = {
    children: string | JSX.Element | JSX.Element[],
    variant: string | { outer: string, inner: string }
    padding: string
}

const CardUI = (props : Props) => {
    const cardTheme = getVariant(props.variant)
    const CardPadding = getPadding(props.padding)
   
    return (
        <>
            {
                props.variant === "elevatedGradient" || props.variant === "softGradient" 
                ?
                <div className={cardTheme.outer + " " + CardPadding + " max-w-xs"} >
                    <div className={cardTheme.inner}>
                        {props.children}
                    </div>
                </div>
                :
                <div className={cardTheme + " " + CardPadding + " max-w-xs"} >
                    {props.children}
                </div>
            }
        </>
    )
}

export default CardUI
