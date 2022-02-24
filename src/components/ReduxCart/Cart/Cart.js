// Packages and Dependencies
import { useSelector } from "react-redux";
// Styles
import styles from "./Cart.module.css";
// Components
import Card from "../UI/Card";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={styles.cart}>
      <h2 className={styles.heading}>Your Shopping Cart</h2>
      <ul className={styles.list}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
