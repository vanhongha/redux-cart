import {useDispatch} from "react-redux";
import {uiActions} from "../../store/ui-slice";

import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();

	const onToggleHandler = () => {
		dispatch(uiActions.toggle());
	}

	return (
		<button onClick={onToggleHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
