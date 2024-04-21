import { CartesianGrid as Primitive, CartesianGridProps } from 'recharts';
import { cartesianGrid } from '@tailus/themer';

const CartesianGrid: React.FC<CartesianGridProps> = (props) => {
    return <Primitive {...props} className={cartesianGrid({class:props.className})} strokeDasharray={props.strokeDasharray || 3} stroke={props.stroke || "currentColor"} />;
}

export default CartesianGrid;