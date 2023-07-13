import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
	const {id, title, quantity, total, price} = props.item;
	const dispatch = useDispatch();

	const onAddHandler = () => {
		dispatch(
			cartActions.addItem({
				item: {
					id: id,
					price: price,
					quantity: 1,
				},
			})
		);
	};

	const onSubtractHandler = () => {
		dispatch(
			cartActions.subtractItem({
				item: {
					id: id,
					quantity: 1,
				},
			})
		);
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{" "}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={onSubtractHandler}>-</button>
					<button onClick={onAddHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
