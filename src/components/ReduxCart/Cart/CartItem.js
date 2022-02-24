// Packages and Dependencies
import { useDispatch } from "react-redux";
// Styles
import styles from "./CartItem.module.css";
// Components
import { cartActions } from "../../../store/ReduxCartSlices/cart-slice.js";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span className={styles.amount}>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.button} onClick={removeItemHandler}>
            -
          </button>
          <button className={styles.button} onClick={addItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
