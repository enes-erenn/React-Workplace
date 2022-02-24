// Packages and Dependencies
import { useDispatch, useSelector } from "react-redux";
// Styles
import styles from "./CartButton.module.css";
// Components
import { uiActions } from "../../../store/ReduxCartSlices/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span className={styles.span}>My Cart</span>
      <span className={`${styles.badge} ${styles.span}`}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
