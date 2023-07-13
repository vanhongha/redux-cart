import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

	const onToggleHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<button onClick={onToggleHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQuantity}</span>
		</button>
	);
};

export default CartButton;
