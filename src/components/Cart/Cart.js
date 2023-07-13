import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const cartItemComponent = items.map((item) => {
    return <CartItem item={item} key={item.id} />;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemComponent}</ul>
    </Card>
  );
};

export default Cart;
