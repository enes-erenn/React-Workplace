// Styles
import styles from "./MainHeader.module.css";
// Components
import CartButton from "../Cart/CartButton";

const MainHeader = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ReduxCart</h1>
      <nav>
        <ul className={styles.list}>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
