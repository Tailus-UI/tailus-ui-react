import { CartesianGrid as Primitive, CartesianGridProps } from 'recharts';
import { cartesianGrid } from '@tailus/themer';

const CartesianGrid: React.FC<CartesianGridProps> = (props) => {
    return <Primitive className={cartesianGrid({class:props.className})} strokeDasharray={3} stroke="currentColor" {...props} />;
}

CartesianGrid.displayName = 'CartesianGrid';
export default CartesianGrid;