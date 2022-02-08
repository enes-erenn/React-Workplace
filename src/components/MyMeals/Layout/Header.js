// Styles
import mealsImage from "../../Assets/meals.jpg";
import styles from "./Header.module.css";
// Components
import HeaderCartButton from "./HeaderCartButton.js";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>MyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
