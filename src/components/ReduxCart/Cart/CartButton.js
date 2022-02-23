import styles from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={styles.button}>
      <span>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;
