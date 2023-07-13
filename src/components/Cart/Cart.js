import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartItemsComponent = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsComponent}</ul>
    </Card>
  );
};

export default Cart;
